import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState();

  useEffect(() => {
    try {
      // const process = async () => {
      //   const response = await fetch("https://x7y1vo2c.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22featured%22%5D%7B%0A...%2C%0A%20%20restaurants%5B%5D-%3E%7B%0A%20%20%20%20...%2C%0A%20%20%20%20dishes%5B%5D-%3E%2C%0A%20%20%20%20%20%20type-%3E%7Bname%7D%0A%20%20%7D%0A%7D")
      //   const json = await response.json()
      //   setFeaturedCategories(json.result)
      // }

      // process()
      sanityClient
        .fetch(
          `*[_type=="featured"]{
        ...
        }`
        )
        .then((data) => {
          console.log(data);
          setFeaturedCategories(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useLayoutEffect(() => {
    // runs on inital mounting of the screen
    navigation.setOptions({
      headerTitle: "ajsndj", // renames the header title
      headerShown: false, // disables the deafult header.....
    });
  }, []);

  return (
    <SafeAreaView className="pt-16">
      {/* Header section ------- */}
      <View className="flex-row items-center mx-4 space-x-2 justify-between">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-grey-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row space-x-1 items-center">
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={17} color="#00CCBB" />
            </Text>
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search -------- */}

      <View className="flex-row items-center mx-4 my-3 space-x-2">
        <View className="flex-row items-center flex-1 bg-gray-200 p-3 space-x-2">
          <MagnifyingGlassIcon color="grey" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body or Scroll Vie */}

      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category?._id}
              id={category?._id}
              title={category?.name}
              desc={category?.short_description}
              data={category?.restaurants}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
