import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";
import NewModal from "../components/NewModal";
import { Calendar } from "react-native-calendars";
import { eachDayOfInterval, format } from "date-fns";
import Reviews from "../sections/Review";
import Host from "../sections/Host";
import ShowMoreButton from "../components/ShowMoreButton";

const TourDetailScreen = ({ route, navigation }) => {
  let { tour } = route.params;
  let { width, height } = Dimensions.get("screen");

  const [selected, setSelected] = useState({ start: "", end: "" });
  const [markedDates, setMarkedDates] = useState({});
  const [stay, setStay] = useState(1);
  let range;

  const handleDayPress = (day) => {
    let updatedMarkedDates = {};

    if (selected.start === "" || selected.end !== "") {
      // start a new range
      updatedMarkedDates = {
        [day.dateString]: { startingDay: true, color: "orange" },
      };
      setSelected({ start: day.dateString, end: "" });
    } else {
      // finish the range
      const end = day.dateString;
      const start = selected.start;

      range = eachDayOfInterval({ start: new Date(start), end: new Date(end) });
      range.forEach((date) => {
        const dateString = format(date, "yyyy-MM-dd");
        updatedMarkedDates[dateString] = { selected: true, color: "orange" };
      });

      updatedMarkedDates = {
        ...markedDates,
        [end]: { endingDay: true, color: "orange" },
        ...updatedMarkedDates,
      };
      setStay(range.length);
      setSelected({ start: "", end: "" });
    }

    setMarkedDates(updatedMarkedDates);
  };

  // const resetDate = () => {
  //   setSelected({start : '' , end : ''})
  // }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ImageBackground
            source={tour.image}
            style={{ height: height * 0.65 }}
          >
            <SafeAreaView>
              <View
                style={{
                  paddingHorizontal: width * 0.03,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  height: "100%",
                  marginTop: height * 0.05,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    width: SPACING * 4,
                    height: SPACING * 4,
                    borderRadius: SPACING * 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="chevron-back"
                    color={COLORS.primary}
                    size={SPACING * 3}
                    onPress={() => navigation.goBack()}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    paddingBottom: SPACING * 8,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.white,
                      width: SPACING * 4,
                      height: SPACING * 4,
                      borderRadius: SPACING * 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="heart-outline"
                      color={COLORS.primary}
                      size={SPACING * 3}
                    />
                  </TouchableOpacity>
                  <View style={{ marginBottom: SPACING * 3 }}>
                    {tour.images.map((gallery, index) => (
                      <TouchableOpacity
                        style={{
                          width: SPACING * 6,
                          height: SPACING * 6,
                          padding: SPACING / 2,
                          backgroundColor: COLORS.white,
                          borderRadius: SPACING,
                          marginBottom: SPACING,
                        }}
                        key={index}
                      >
                        <Image
                          source={gallery.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: SPACING,
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SPACING * 2,
              borderRadius: SPACING * 3,
              bottom: SPACING * 1.5,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "bold",
                  color: COLORS.dark,
                }}
              >
                {tour.title}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "bold",
                    color: COLORS.dark,
                  }}
                >
                  {tour.price}
                </Text>
                <Text>/person</Text>
              </View>
            </View>
            <View style={{ marginVertical: SPACING * 2 }}>
              <View style={{ flexDirection: "row", marginBottom: SPACING * 2 }}>
                <TouchableOpacity
                  style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                >
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: "bold",
                      fontSize: SPACING * 1.7,
                    }}
                  >
                    Overview
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                >
                  <Text>Reviews</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: SPACING * 2, flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      shadowColor: COLORS.dark,
                      shadowOffset: { width: SPACING / 2, height: SPACING },
                      shadowRadius: SPACING / 2,
                      shadowOpacity: 0.1,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      marginRight: SPACING,
                    }}
                  >
                    <Ionicons
                      name="time"
                      size={SPACING * 3}
                      color={COLORS.primary}
                    />
                  </View>
                  <View style={{ marginRight: SPACING * 2 }}>
                    <Text
                      style={{
                        fontSize: SPACING + 1,
                        marginBottom: SPACING / 2,
                        textTransform: "uppercase",
                      }}
                    >
                      Duration
                    </Text>
                    <Text
                      style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}
                    >
                      {tour.duration}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      shadowColor: COLORS.dark,
                      shadowOffset: { width: SPACING / 2, height: SPACING },
                      shadowRadius: SPACING / 2,
                      shadowOpacity: 0.1,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      marginRight: SPACING,
                    }}
                  >
                    <Ionicons
                      name="star"
                      size={SPACING * 3}
                      color={COLORS.primary}
                    />
                  </View>
                  <View style={{ marginRight: SPACING * 2 }}>
                    <Text
                      style={{
                        fontSize: SPACING + 1,
                        marginBottom: SPACING / 2,
                        textTransform: "uppercase",
                      }}
                    >
                      Rating
                    </Text>
                    <Text
                      style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}
                    >
                      {tour.rating} out of 5
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={{ color: COLORS.dark }}>{tour.description}</Text>
              </View>
              {/* Amenities */}
              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                    marginTop: 10,
                    fontWeight: "600",
                  }}
                >
                  What This Place Offers
                </Text>
                <View style={{ flexDirection: "column", marginTop: 30 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Ionicons name="image-outline" size={SPACING * 3} />
                    <Text style={{ fontSize: 15 }}>Mountain View</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Ionicons name="image-outline" size={SPACING * 3} />
                    <Text style={{ fontSize: 15 }}>Valley View</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Ionicons name="restaurant-outline" size={SPACING * 3} />
                    <Text style={{ fontSize: 15 }}>Food</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Ionicons name="wifi-outline" size={SPACING * 3} />
                    <Text style={{ fontSize: 15 }}>Wifi</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: 15,
                    }}
                  >
                    <Ionicons name="flower-outline" size={SPACING * 3} />
                    <Text style={{ fontSize: 15 }}>Garden</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: "black",
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: 15,
                      }}
                    >
                      Show All Amenities
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                    marginTop: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  {stay} nights in {tour.title}
                </Text>

                {/* //calendars */}
                <Calendar
                  onDayPress={handleDayPress}
                  markedDates={markedDates}
                  minDate={selected.start}
                  markingType={"period"}
                />
                {/* {selected.start != "" && (
                  <TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginTop: 10 }}>
                    <Text
                      onPress={resetDate}
                      style={{
                        borderColor: COLORS.formUi,
                        textAlign: "center",
                        padding: 7,
                        fontSize: 15,
                        borderWidth: 1,
                        borderRadius: 20
                      }}
                    >
                      Reset
                    </Text>
                  </TouchableOpacity>
                )} */}
              </View>
              {/* //Review Section */}
              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Reviews />
              </View>
              {/* // Meet your Host Section */}
              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Host />
              </View>

              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                    marginTop: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  House Rules
                </Text>
                <View
                  style={{ flexDirection: "column", marginTop: 20, gap: 10 }}
                >
                  <Text style={{ fontSize: 15 }}>Check in After 12:00 pm</Text>
                  <Text style={{ fontSize: 15 }}>Checkout Before 10:00 am</Text>
                  <Text style={{ fontSize: 15 }}>2 guests allowed maximum</Text>

                  <ShowMoreButton />
                </View>
              </View>

              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                    marginTop: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  Safety & Property
                </Text>
                <View
                  style={{ flexDirection: "column", marginTop: 20, gap: 10 }}
                >
                  <Text style={{ fontSize: 15 }}>
                    Carbon monoxide fireAlarm
                  </Text>
                  <Text style={{ fontSize: 15 }}>Smoke alarm</Text>
                  <Text style={{ fontSize: 15 }}>Pet(s) live on Property</Text>

                  <ShowMoreButton />
                </View>
              </View>

              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                    gap: 10,
                  }}
                >
                  <Ionicons name="flag" size={20} />
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Report this listing
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <NewModal />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TourDetailScreen;
