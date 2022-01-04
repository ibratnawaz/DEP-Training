const apiKey = "AIzaSyCf5TGyyEMP9Oc9INSHeB1Yhx1ZkxS4sgI";

const videosApi = "https://www.googleapis.com/youtube/v3/videos?";
const searchApi = "https://www.googleapis.com/youtube/v3/search?";

const dummyDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis facilis necessitatibus blanditiis ipsa quisquam? Aspernatur aliquid dolore incidunt, quia sunt, saepe suscipit maiores commodi voluptates necessitatibus, mollitia fugiat dolorum?";

const htmlQuerySelectorObject = {
  mainContainer: document.querySelector("#main-container"),
  sectionPagination: document.querySelector("#pagination"),
};

const numbers = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  FIVE: 5,
  EIGHT: 8,
  TEN: 10,
};

const pageStrings = {
  DIV: "div",
  PART: "snippet",
  CHART: "mostPopular",
  REGION: "IN",
  IMAGE: "img",
  SEARCH_KEY: "search-videos",
  CIRCLE_ICON: '<i class="fas fa-check-circle"></i>',
  SPACE: "&nbsp;",
  EMPTY: "",
};

const buttonStrings = {
  BUTTON: "button",
  BUTTON_PREFIX: "btn-",
  NEXT: "next",
  PREVIOUS: "prev",
  ACTIVE_BUTTON: "btn-active",
  PREVIOUS_BUTTON: "btn-prev",
  NEXT_BUTTON: "btn-next",
  CLICK_EVENT: "click",
};

const videoStrigns = {
  BOX: "video-box",
  DETAILS: "video-details",
  TITLE: "video-title",
  CONTENT: "video-content",
  AUTHOR: "video-author",
  DATE: "video-date",
};

const apiConfig = {
  key: apiKey,
  part: pageStrings.PART,
  chart: pageStrings.CHART,
  maxResults: numbers.FIVE * numbers.TEN,
  regionCode: pageStrings.REGION,
};

let videosData;
const videosPerPageCount = numbers.EIGHT;
let startPage = numbers.ONE;
let currentPage = numbers.ONE;
let totalPage = numbers.ZERO;

const pageStack = [currentPage];

const fetchApi = async (api) => {
  try {
    const response = await fetch(api + new URLSearchParams(apiConfig));
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
};

const getSearchVideos = (e) => {
  e.preventDefault();

  const searchString = document.querySelector(
    `#${pageStrings.SEARCH_KEY}`
  ).value;

  apiConfig.q = searchString;
  fetchHelper(searchApi);
};

const fetchHelper = async (api) => {
  try {
    const data = await fetchApi(api);
    videosData = data.items;
    setVideos(videosData);
    pagination(videosData.length);
  } catch (error) {
    console.error(error);
  }
};

const setVideos = () => {
  const currentItems = videosData.slice(
    (currentPage - numbers.ONE) * videosPerPageCount,
    (currentPage - numbers.ONE) * videosPerPageCount + videosPerPageCount
  );

  const { mainContainer } = htmlQuerySelectorObject;
  mainContainer.innerHTML = pageStrings.EMPTY;
  currentItems.forEach((item) => {
    mainContainer.appendChild(videoBox(item));
  });
};

const videoBox = (item) => {
  const videoBox = createHtmlElement(pageStrings.DIV, {
    className: videoStrigns.BOX,
  });

  const videoImage = createHtmlElement(pageStrings.IMAGE, {
    imageSource: item.snippet.thumbnails.high.url,
  });

  const videoDetails = createHtmlElement(pageStrings.DIV, {
    className: videoStrigns.DETAILS,
  });

  videoDetailsInnerBox(videoDetails, item);

  videoBox.append(videoImage, videoDetails);

  return videoBox;
};

const videoDetailsInnerBox = (videoDetails, item) => {
  const videoTitle = createHtmlElement(pageStrings.DIV, {
    text: item.snippet.title.slice(numbers.ZERO, numbers.FIVE * numbers.TEN),
    className: videoStrigns.TITLE,
  });
  const videoContent = createHtmlElement(pageStrings.DIV, {
    text: item.snippet.description || dummyDescription,
    className: videoStrigns.CONTENT,
  });
  const videoAuthor = createHtmlElement(pageStrings.DIV, {
    className: videoStrigns.AUTHOR,
  });
  videoAuthor.innerHTML = `${item.snippet.channelTitle} ${pageStrings.SPACE}${
    +Math.random().toFixed(0) ? pageStrings.CIRCLE_ICON : pageStrings.EMPTY
  }`;
  const videoPublishedOn = createHtmlElement(pageStrings.DIV, {
    text: getFormattedDate(item.snippet.publishedAt),
    className: videoStrigns.DATE,
  });

  videoDetails.append(videoTitle, videoContent, videoAuthor, videoPublishedOn);
};

const getFormattedDate = (dateTime) => {
  const istDate = new Date(dateTime);
  const day = istDate.toLocaleDateString("en-US", { weekday: "short" });
  const month = istDate.toLocaleDateString("en-US", { month: "short" });
  const date = istDate.getDate();
  const year = istDate.getFullYear();
  const formattedDate = `${day} ${month} ${date}, ${year}`;
  return formattedDate;
};

const pagination = (dataCount) => {
  totalPage = Math.ceil(dataCount / videosPerPageCount);

  const { sectionPagination } = htmlQuerySelectorObject;
  sectionPagination.innerHTML = pageStrings.EMPTY;

  generatePreviousButton(sectionPagination);

  for (let index = numbers.TWO; index <= totalPage; index++) {
    const pageButton = createHtmlElement(buttonStrings.BUTTON, {
      text: index,
      id: `${buttonStrings.BUTTON_PREFIX}${index}`,
    });
    setOnClickAttribute(pageButton, index);
    sectionPagination.appendChild(pageButton);
  }

  const pageNextButton = createHtmlElement(buttonStrings.BUTTON, {
    text: buttonStrings.NEXT,
    id: buttonStrings.NEXT_BUTTON,
  });
  setOnClickAttribute(pageNextButton, buttonStrings.NEXT);
  sectionPagination.appendChild(pageNextButton);

  sethtmlQuerySelectorObject();
};

const generatePreviousButton = (sectionPagination) => {
  const pagePreviousButton = createHtmlElement(buttonStrings.BUTTON, {
    text: buttonStrings.PREVIOUS,
    id: buttonStrings.PREVIOUS_BUTTON,
  });
  pagePreviousButton.disabled = true;
  setOnClickAttribute(pagePreviousButton, buttonStrings.PREVIOUS);

  const buttonOne = createHtmlElement(buttonStrings.BUTTON, {
    text: numbers.ONE,
    className: buttonStrings.ACTIVE_BUTTON,
    id: `${buttonStrings.BUTTON_PREFIX}${numbers.ONE}`,
  });
  setOnClickAttribute(buttonOne, numbers.ONE);
  sectionPagination.append(pagePreviousButton, buttonOne);
};

const paginate = async (page) => {
  if (hasPrevPage(page)) pageStack.pop();
  else if (hasNextPage(page)) pageStack.push(++currentPage);
  else pageStack.push(page);

  currentPage = pageStack[pageStack.length - numbers.ONE];
  setVideos();
  toggleActiveButton();
  toggleButton();
};

const createHtmlElement = (tagName, attributes) => {
  const htmlTag = document.createElement(tagName);
  const { text, id, className, imageSource } = attributes;
  text && (htmlTag.innerText = text);
  id && (htmlTag.id = id);
  className && htmlTag.classList.add(className);
  imageSource && (htmlTag.src = imageSource);
  return htmlTag;
};

const setOnClickAttribute = (button, text) => {
  let value;
  if (Number.isInteger(text)) value = text;
  else
    value =
      text == buttonStrings.NEXT ? buttonStrings.NEXT : buttonStrings.PREVIOUS;

  button.addEventListener(buttonStrings.CLICK_EVENT, function () {
    paginate(value, this);
  });
};

const sethtmlQuerySelectorObject = () => {
  htmlQuerySelectorObject.previousButton = document.querySelector(
    `#${buttonStrings.PREVIOUS_BUTTON}`
  );
  htmlQuerySelectorObject.nextButton = document.querySelector(
    `#${buttonStrings.NEXT_BUTTON}`
  );
  htmlQuerySelectorObject.activeButton = document.querySelector(
    `.${buttonStrings.ACTIVE_BUTTON}`
  );
};

const toggleActiveButton = () => {
  let { activeButton: currentActiveButton } = htmlQuerySelectorObject;
  currentActiveButton.classList.remove(buttonStrings.ACTIVE_BUTTON);
  currentActiveButton = document.querySelector(
    `#${buttonStrings.BUTTON_PREFIX}${currentPage}`
  );
  currentActiveButton.classList.add(buttonStrings.ACTIVE_BUTTON);
  htmlQuerySelectorObject.activeButton = currentActiveButton;
};

const toggleButton = () => {
  const { previousButton, nextButton } = htmlQuerySelectorObject;
  previousButton.disabled = isCurrentPage(numbers.ONE);
  nextButton.disabled = isCurrentPage(totalPage);
};

const isCurrentPage = (pageCount) => currentPage == pageCount;
const hasPrevPage = (page) => page == buttonStrings.PREVIOUS;
const hasNextPage = (page) => page == buttonStrings.NEXT;

window.onload = fetchHelper(videosApi);
