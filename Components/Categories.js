import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" title="Testing" />
      <CategoryCard imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg" title="Testing" />
      <CategoryCard imgUrl="https://thehealthyepicurean.com/wp-content/uploads/2017/03/Indian-Butter-Chicken-4-scaled.jpg" title="Testing" />
      <CategoryCard imgUrl="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" title="Testing" />
      <CategoryCard imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg" title="Testing" />
      <CategoryCard imgUrl="https://thehealthyepicurean.com/wp-content/uploads/2017/03/Indian-Butter-Chicken-4-scaled.jpg" title="Testing" />
     
    </ScrollView>
  );
};

export default Categories;
