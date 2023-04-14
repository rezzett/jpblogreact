export const getPageCount = (postCount, limit) => Math.ceil(postCount / limit);
export const getPageArray = (pageCount) => [...Array(pageCount).keys()].map(i => ++i);