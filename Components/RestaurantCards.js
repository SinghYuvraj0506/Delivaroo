import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {MapPinIcon} from "react-native-heroicons/outline"
import {StarIcon} from "react-native-heroicons/solid"

const RestaurantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  desc,
  dishes,
  long,
  lat,
}) => {
  return (

    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{uri:imgUrl}} className="w-64 h-36 rounded-sm"/>
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" size={22} opacity={0.5}/>
          <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text>  | {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon color="gray" size={22} opacity={0.4}/>
          <Text className="text-xs text-gray-500"> Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
