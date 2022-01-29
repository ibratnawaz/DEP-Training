import Book from "../pages/Book";

export const addToCart = (book: Book, setIsPresent: any) => {
  const { id, title, authors, thumbnailUrl } = book;
  const payload = { id, title, authors, thumbnailUrl };
  const items = getItems();
  localStorage.setItem("booksInCart", JSON.stringify([...items, payload]));
  setIsPresent(true);
};

export const isItemInCart = (id: number) => {
  const items = getItems();
  const data = items.findIndex((item: Book) => item.id === id);
  return data >= 0 ? true : false;
};

const getItems = () => {
  const resp = localStorage.getItem("booksInCart");
  let data = JSON.parse(resp as string);
  return data || [];
};
