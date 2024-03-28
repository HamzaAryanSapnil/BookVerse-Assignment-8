const getStoredReadingList = () => {
    const storedReadingBooks = localStorage.getItem("readingBooks");
    if (storedReadingBooks) {
        return JSON.parse(storedReadingBooks);
    } else {
        return [];
    }
};
const saveReadingList = (id) => {
    const storedReadingBooks = getStoredReadingList();
    const exists = storedReadingBooks.find(bookExist => bookExist === id);
    if (!exists) {
        storedReadingBooks.push(id);
        localStorage.setItem("readingBooks", JSON.stringify(storedReadingBooks));
    }
};

export {saveReadingList, getStoredReadingList}