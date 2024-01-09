import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowSmallRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ title, desc,data }) => {
  return (
    <View className="mt-5">
      <View className="flex-row items-center justify-between w-full px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="font-bold text-gray-500 ">{desc}</Text>
        </View>

        <ArrowSmallRightIcon color="#00CCBB" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
      >

        {data?.map((restaurant)=>{
          return <RestaurantCards
          key={restaurant?._id}
          id={123}
          imgUrl="https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"
          title="Sushi"
          rating={restaurant?.rating}
          genre="Japanese"
          address={restaurant?.address}
          desc="asddas"
          dishes={[]}
          long={restaurant?.long}
          lat={restaurant?.lat}
        />
        })}
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
