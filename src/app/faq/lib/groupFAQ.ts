const groupByCategory = (data: any) => {
  return data.reduce((acc: any, curr: any) => {
    const categoryTitle = curr.category.title;

    if (!acc[categoryTitle]) {
      acc[categoryTitle] = [];
    }

    acc[categoryTitle].push(curr);
    return acc;
  }, {});
};

export default groupByCategory;
