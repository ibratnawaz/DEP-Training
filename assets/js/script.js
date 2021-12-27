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
  PREV: "prev",
  DIV: "div",
  BUTTON: "button",
  NEXT: "next",
  PART: "snippet",
  CHART: "mostPopular",
  REGION: "IN",
  IMAGE: "img",
  ACTIVE_BUTTON: "btn-active",
  PREVIOUS_BUTTON: "btn-prev",
  NEXT_BUTTON: "btn-next",
};

let videosData;
const videosPerPageCount = numbers.EIGHT;
let startPage = numbers.ONE;
let currentPage = numbers.ONE;
let totalPage = numbers.ZERO;

const pageStack = [currentPage];

const fetchSearchVideos = async (e) => {
  try {
    e.preventDefault();

    const searchString = document.querySelector("#search-videos").value;

    const response = await fetch(
      searchApi +
        new URLSearchParams({
          key: apiKey,
          part: pageStrings.PART,
          chart: pageStrings.CHART,
          maxResults: numbers.FIVE * numbers.TEN,
          regionCode: pageStrings.REGION,
          q: searchString,
        })
    );

    const data = await response.json();
    videosData = data.items;

    setVideos(videosData);
    pagination(videosData.length);
  } catch (error) {
    console.error(error.message);
  }
};

const fetchDefaultVideos = async () => {
  try {
    const response = await fetch(
      videosApi +
        new URLSearchParams({
          key: apiKey,
          part: pageStrings.PART,
          chart: pageStrings.CHART,
          maxResults: numbers.FIVE * numbers.TEN,
          regionCode: pageStrings.REGION,
        })
    );

    const data = await response.json();
    videosData = data.items;

    setVideos(videosData);
    pagination(videosData.length);
  } catch (error) {
    console.error(error.message);
  }
};

const setVideos = () => {
  const currentItems = videosData.slice(
    (currentPage - numbers.ONE) * videosPerPageCount,
    (currentPage - numbers.ONE) * videosPerPageCount + videosPerPageCount
  );

  const { mainContainer } = htmlQuerySelectorObject;
  mainContainer.innerHTML = "";
  currentItems.forEach((item) => {
    mainContainer.appendChild(videoBox(item));
  });
};

const videoBox = (item) => {
  const videoBox = createHtmlElement(pageStrings.DIV, null, "video-box");

  const videoImage = createHtmlElement(pageStrings.IMAGE);
  videoImage.src = item.snippet.thumbnails.high.url;

  const videoDetails = createHtmlElement(
    pageStrings.DIV,
    null,
    "video-details"
  );

  const videoTitle = createHtmlElement(
    pageStrings.DIV,
    item.snippet.title.slice(0, 50),
    "video-title"
  );
  const videoContent = createHtmlElement(
    pageStrings.DIV,
    item.snippet.description || dummyDescription,
    "video-content"
  );
  const videoAuthor = createHtmlElement(pageStrings.DIV, null, "video-author");
  videoAuthor.innerHTML = `${item.snippet.channelTitle} &nbsp;${
    +Math.random().toFixed(0) ? '<i class="fas fa-check-circle"></i>' : ""
  }`;
  const videoPublishedOn = createHtmlElement(
    pageStrings.DIV,
    new Date(`${item.snippet.publishedAt}`).toString().slice(0, 15),
    "video-date"
  );

  videoDetails.append(videoTitle, videoContent, videoAuthor, videoPublishedOn);

  videoBox.append(videoImage, videoDetails);

  return videoBox;
};

const pagination = (dataCount) => {
  totalPage = Math.ceil(dataCount / videosPerPageCount);

  const { sectionPagination } = htmlQuerySelectorObject;
  sectionPagination.innerHTML = "";

  const pagePreviousButton = createHtmlElement(
    pageStrings.BUTTON,
    pageStrings.PREV,
    null,
    pageStrings.PREVIOUS_BUTTON
  );
  pagePreviousButton.disabled = true;
  setOnclickAttribute(pagePreviousButton, pageStrings.PREV);
  sectionPagination.appendChild(pagePreviousButton);

  const firstButton = createHtmlElement(
    pageStrings.BUTTON,
    numbers.ONE,
    pageStrings.ACTIVE_BUTTON,
    "btn-1"
  );
  setOnclickAttribute(firstButton, numbers.ONE);
  sectionPagination.appendChild(firstButton);

  for (let index = numbers.TWO; index <= totalPage; index++) {
    const pageButton = createHtmlElement(
      pageStrings.BUTTON,
      index,
      null,
      `btn-${index}`
    );
    setOnclickAttribute(pageButton, index);
    sectionPagination.appendChild(pageButton);
  }

  const pageNextButton = createHtmlElement(
    pageStrings.BUTTON,
    pageStrings.NEXT,
    null,
    pageStrings.NEXT_BUTTON
  );
  setOnclickAttribute(pageNextButton);
  sectionPagination.appendChild(pageNextButton);
  sethtmlQuerySelectorObject();
};

const paginate = async (page) => {
  if (isCurrentPagePrevious(page)) pageStack.pop();
  else if (isCurrentPageNext(page)) pageStack.push(++currentPage);
  else pageStack.push(page);

  currentPage = pageStack[pageStack.length - numbers.ONE];
  setVideos();
  toggleActiveButton();
  toggleButton();
};

const createHtmlElement = (tagName, text, className, id) => {
  const htmlTag = document.createElement(tagName);
  text && (htmlTag.innerText = text);
  id && (htmlTag.id = id);
  className && htmlTag.classList.add(className);
  return htmlTag;
};

const setOnclickAttribute = (button, text = pageStrings.NEXT) => {
  button.addEventListener("click", function () {
    paginate(
      text == pageStrings.NEXT
        ? pageStrings.NEXT
        : text == pageStrings.PREV
        ? pageStrings.PREV
        : text,
      this
    );
  });
};

const sethtmlQuerySelectorObject = () => {
  htmlQuerySelectorObject.previousButton = document.querySelector(
    `#${pageStrings.PREVIOUS_BUTTON}`
  );
  htmlQuerySelectorObject.nextButton = document.querySelector(
    `#${pageStrings.NEXT_BUTTON}`
  );
  htmlQuerySelectorObject.activeButton = document.querySelector(
    `.${pageStrings.ACTIVE_BUTTON}`
  );
};

const toggleActiveButton = () => {
  let { activeButton: currentActiveButton } = htmlQuerySelectorObject;
  currentActiveButton.classList.remove(pageStrings.ACTIVE_BUTTON);
  currentActiveButton = document.querySelector(`#btn-${currentPage}`);
  currentActiveButton.classList.add(pageStrings.ACTIVE_BUTTON);
  htmlQuerySelectorObject.activeButton = currentActiveButton;
};

const toggleButton = () => {
  togglePreviousButton();
  toggleNextButton();
};

const togglePreviousButton = () => {
  const { previousButton } = htmlQuerySelectorObject;
  isCurrentPageEquals(numbers.ONE)
    ? (previousButton.disabled = true)
    : (previousButton.disabled = false);
};

const toggleNextButton = () => {
  const { nextButton } = htmlQuerySelectorObject;
  isCurrentPageEquals(totalPage)
    ? (nextButton.disabled = true)
    : (nextButton.disabled = false);
};

const isCurrentPageEquals = (pageCount) => currentPage == pageCount;
const isCurrentPagePrevious = (page) => page == pageStrings.PREV;
const isCurrentPageNext = (page) => page == pageStrings.NEXT;

window.onload = fetchDefaultVideos();
