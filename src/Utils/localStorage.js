const getStoredReadingList = () => {
  const storedReadingBooks = localStorage.getItem("readingBooks");
  if (storedReadingBooks) {
    return JSON.parse(storedReadingBooks);
  } else {
    return [];
  }
};

const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  } else {
    return [];
  }
};

const saveWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  const exists = storedWishlist.find((bookExist) => bookExist === id);
  if (!exists) {
    storedWishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  }
};

const saveReadingList = (id) => {
  const storedReadingBooks = getStoredReadingList();
  const exists = storedReadingBooks.find((bookExist) => bookExist === id);
  if (!exists) {
    storedReadingBooks.push(id);
    localStorage.setItem("readingBooks", JSON.stringify(storedReadingBooks));
  }
};

const removeFromWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  const exists = storedWishlist.find((bookExist) => bookExist === id);
  console.log("exists: ", exists, "storedWishlist: ", storedWishlist);
  const newWishlist = storedWishlist.filter((bookId) => bookId !== id);
  console.log("newWishlist: ", newWishlist);
  saveWishlist(newWishlist);
};

export {
  saveReadingList,
  getStoredReadingList,
  getStoredWishlist,
  saveWishlist,
  removeFromWishlist,
};
