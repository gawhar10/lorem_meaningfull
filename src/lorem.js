const wordsCollection = () => {
  const giantWordString = `On average, the cost of a healthy meal has increased by 52% in October 2024 compared to the ame month last year. Meanwhile, average salaries and wages have increased in the range of 9 to 10% Already, casual labourers spend a larger proportion of their monthly income on food than those in salaried jobs. This gap has widened further in the past year. Households, where women are sole breadwinners, in particular, bear heavier burdens,For this analysis, it has been assumed that an average Indian family will be able to meet their daily dietary needs if they consume food equivalent to two thalis per day, spread across breakfast, lunch and dinner. Non vegetarian items were not considered due to lack of past data. Vegetable prices were sourced from Mumbai and for other items Maharashtra was chosen as an exemplar, due to the availability of consistent data. Wages data was also taken from the same State. Soaring costs: Retail price hike of 13 items The following graphs show the weight of commodities required to prepare two thalis daily and their average retail prices in Mumbai (for vegetables) and in Maharashtra (for other items) in Oct. 2023 and Oct. 2024. The % change in prices is also depicted. The retail prices of vegetables were ascertained from the National Horticulture Board’s dashboard. Retail prices of items other than vegetables were obtained from the Department of Consumer Affairs’ dashboard. The rise in thali prices can be directly linked to the significant increase in the cost of most vegetables. The retail prices of tomato, potato, and garlic have notably surged during this period. Between October 2023 and October 2024, tomato prices shot up by 247%, potato prices by 180%, and garlic by 128%. On an average, the retail price of all vegetables used in the thali collectively increased by 89%, while that of non-vegetable items grew by only 1.5% In the same period though, the prices of tur dal and rice dropped by 2.6% and 0.7%, respectively. Other items, such as salt, sunflower oil, and wheat, underwent only moderate price hikes, ranging between 3% and 18%. Share in wage: Measuring affordability In the charts below, for regular workers, the average salaries earned during a calendar month in Maharashtra were considered. For casual labourers, average earnings per day of those engaged in works other than public works were considered. Values were sourced from the Periodic Labour Force Survey report (October to December quarter -2023). Data for 2024 was arrived at by calculating the compound annual growth rate for the previous five October to December quarters. The analysis assumes that labourers got paid on all days, including rest days, which may not usually be the case. Average wage/salary The following graphs depict the increase in the wages and salaries of daily labourers and regular workers in Maharashtra. The wages are extrapolated to estimate the monthly earnings of a labourer. The data for women and men are depicted. The average daily wage of men in Maharashtra increased from ₹451/ day, in October- December 2023 to ₹492/day in October- December 2024. The corresponding figures for women were ₹293 a day and ₹324 a day. These figures were then calculated for 30 days to arrive at their monthly earnings. The average monthly salary of men in Maharashtra increased from ₹24,321 in October- December 2023 to ₹26,509 in October- December 2024. The corresponding figures for women were ₹18,959 and ₹20,928. Cost of meals as a share of wages The graphs depict the retail cost of making two thalis every day for a month at home, as a share of monthly wages and salaries. The figures are in ercentage. Data for women and men are depicted separately. The cost when considered as a share of wages earned, increased from 22.6% of a male casual labourer’s monthly earnings in 2023 to 31.4% in 2024 - an 8.8 point increase. The corresponding figures for a female casual labourer was 34.7% and 47.6% - a 12.9 point increase. The cost when considered as a share of a male regular worker’s monthly salary increased from 12.6% in 2023 to 17.5% in 2024- a 4.9 point increase. The corresponding figures for a female worker was 16% and 22%-a 6 point increase. The analysis shows that food expenses already exerted a disproportionately higher burden on households in which women were sole breadwinners. In the past year, this burden has increased further. Share of wages and salaries spent by such households on making a healthy meal, increased by 12.9 points and 6 points respectively, higher than those for men.`;

  const wordsList = giantWordString.split(" ");
  const wordsListLength = wordsList.length;
  return { wordsList, wordsListLength };
};

const getRandomIndexesList = (count) => {
  const wordsListLength = wordsCollection().wordsListLength;
  let randomIndexesList = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * (wordsListLength + 1));
    randomIndexesList.push(index);
  }

  return randomIndexesList;
};

const createLorem = (count) => {
  let paragraph = "";
  const loremParagraphList = [];
  const warningMsg = "Word count should be between 30 to 2000.";
  if (count < 30 || count > 2000) {
    loremParagraphList.push(warningMsg);
    return loremParagraphList;
  }
  const randomIndexesList = getRandomIndexesList(count);
  const wordsList = wordsCollection().wordsList;
  let loremWordsList = randomIndexesList.map((index) => {
    const word = wordsList[index];
    return word;
  });

  for (let i = 0; i < loremWordsList.length; i++) {
    if (paragraph.split(" ").length % 50 === 0) {
      // paragraph += ".";
      paragraph += loremWordsList[i] + ".";
      loremParagraphList.push(paragraph);
      paragraph = "";
    } else {
      paragraph += loremWordsList[i] + " ";
    }
  }
  loremParagraphList.push(paragraph);
  return loremParagraphList;
};

export default createLorem;
