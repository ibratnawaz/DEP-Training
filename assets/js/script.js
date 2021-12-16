const apiKey = "AIzaSyCf5TGyyEMP9Oc9INSHeB1Yhx1ZkxS4sgI";

const videosApi = "https://www.googleapis.com/youtube/v3/videos?";
const searchApi = "https://www.googleapis.com/youtube/v3/search?";

const dummyDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis facilis necessitatibus blanditiis ipsa quisquam? Aspernatur aliquid dolore incidunt, quia sunt, saepe suscipit maiores commodi voluptates necessitatibus, mollitia fugiat dolorum?";

let videosData;
let startPage = 1;
let totalPage = 0;
const videosPerPageCount = 8;

const fetchVideos = async (e, apiHit = searchApi) => {
  try {
    e && e.preventDefault();

    if (apiHit == searchApi) {
      const searchString = document.querySelector("#search-videos").value;
      apiHit = `${apiHit}&q=${searchString}&`;
    }

    const response = await fetch(
      apiHit +
        new URLSearchParams({
          key: apiKey,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "IN",
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
    (startPage - 1) * videosPerPageCount,
    (startPage - 1) * videosPerPageCount + videosPerPageCount
  );
  const mainContainer = document.querySelector("#main-container");
  mainContainer.innerHTML = "";
  currentItems.forEach((item) => {
    const videoBox = createHtmlElement("div", null, "video-box");

    const videoImage = createHtmlElement("img");
    videoImage.src = item.snippet.thumbnails.high.url;

    const videoDetails = createHtmlElement("div", null, "video-details");

    const videoTitle = createHtmlElement(
      "div",
      item.snippet.title.slice(0, 50),
      "video-title"
    );
    const videoContent = createHtmlElement(
      "div",
      item.snippet.description || dummyDescription,
      "video-content"
    );
    const videoAuthor = createHtmlElement("div", null, "video-author");
    videoAuthor.innerHTML = `${item.snippet.channelTitle} &nbsp;${
      +Math.random().toFixed(0) ? '<i class="fas fa-check-circle"></i>' : ""
    }`;
    const videoPublishedOn = createHtmlElement(
      "div",
      new Date(`${item.snippet.publishedAt}`).toString().slice(0, 15),
      "video-date"
    );

    videoDetails.append(
      videoTitle,
      videoContent,
      videoAuthor,
      videoPublishedOn
    );

    videoBox.append(videoImage, videoDetails);

    mainContainer.appendChild(videoBox);
  });
};

const pagination = (dataCount) => {
  totalPage = Math.ceil(dataCount / videosPerPageCount);

  const sectionPagination = document.querySelector("#pagination");
  sectionPagination.innerHTML = "";

  const pagePreviousButton = createHtmlElement(
    "button",
    "Prev",
    null,
    `btn-prev`
  );
  pagePreviousButton.disabled = true;
  setOnclickAttribute(pagePreviousButton, "prev");
  sectionPagination.appendChild(pagePreviousButton);

  for (let i = 1; i <= totalPage; i++) {
    let pageButton;
    if (i == 1)
      pageButton = createHtmlElement("button", i, "btn-active", `btn-${i}`);
    else pageButton = createHtmlElement("button", i, null, `btn-${i}`);
    setOnclickAttribute(pageButton, i);
    sectionPagination.appendChild(pageButton);
  }

  const pageNextButton = createHtmlElement("button", "Next", null, `btn-next`);
  setOnclickAttribute(pageNextButton);
  sectionPagination.appendChild(pageNextButton);
};

const paginate = async (page) => {
  if (page == "prev") startPage--;
  else if (page == "next") startPage++;
  else startPage = page;

  setVideos();
  document.querySelector(".btn-active").classList.remove("btn-active");
  document.querySelector(`#btn-${startPage}`).classList.add("btn-active");

  toggleButton();
};

const createHtmlElement = (tagName, text, className, id) => {
  const htmlTag = document.createElement(tagName);
  text && (htmlTag.innerText = text);
  id && (htmlTag.id = id);
  className && htmlTag.classList.add(className);
  return htmlTag;
};

const setOnclickAttribute = (button, text = "next") => {
  button.addEventListener("click", function () {
    paginate(text == "next" ? "next" : text == "prev" ? "prev" : text, this);
  });
};

const toggleButton = () => {
  if (startPage == totalPage)
    document.querySelector("#btn-next").disabled = true;
  else document.querySelector("#btn-next").disabled = false;

  if (startPage - 1 == 0) document.querySelector("#btn-prev").disabled = true;
  else document.querySelector("#btn-prev").disabled = false;
};

window.onload = fetchVideos(null, videosApi);
