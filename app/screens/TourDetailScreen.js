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
import AmenityCard from "../components/AmenityCard";

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
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ImageBackground source={tour.image} style={{ height: height * 0.4 }}>
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
                  fontSize: SPACING * 3,
                  fontWeight: "400",
                  color: COLORS.dark,
                }}
              >
                {tour.title}
              </Text>
            </View>
            <View style={{ marginVertical: SPACING * 2 }}>
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 10,
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Ionicons name="star" size={15} />
                  <Text>4.98</Text>
                  <Ionicons name="ellipse" size={3} />
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "500",
                    }}
                  >
                    291 Reviews
                  </Text>
                  <Ionicons name="ellipse" size={3} />
                  <Ionicons name="heart" size={15} />

                  <Text style={{ fontWeight: "300" }}>SuperHost</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Ionicons name="pin" size={15} />
                  <Text style={{ textDecorationLine: "underline" }}>
                    England , United Kingdom
                  </Text>
                </View>
              </View>

              {/* Room By */}

              <View
                style={{
                  flexDirection: "column",
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 25, width: "70%" }}>
                    Room in a apartment By Arjun
                  </Text>
                  <Image
                    style={{
                      height: SPACING * 5,
                      width: SPACING * 5,
                      borderRadius: SPACING * 5,
                    }}
                    source={require("../assets/images/Avatar.png")}
                  />
                </View>
                <ScrollView
                  style={{ marginTop: 30, marginBottom: 10 }}
                  horizontal
                >
                  <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
                    <AmenityCard />
                    <AmenityCard />
                    <AmenityCard />
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                  width: width * 0.8,
                }}
              >
                <View style={{ marginTop: 20, flexDirection: "column" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <Ionicons name="bed-outline" size={25} />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Room in a Rental Unit
                      </Text>
                      <Text style={{ fontSize: 15 }}>
                        You own the room , plus shared access to shared space
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: 10,
                      marginTop: 10,
                    }}
                  >
                    <Ionicons name="briefcase-outline" size={25} />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Dedicated work Space
                      </Text>
                      <Text style={{ fontSize: 15 }}>Dedicated Workspace</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: 10,
                      marginTop: 10,
                    }}
                  >
                    <Ionicons name="calendar-outline" size={25} />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Free Cancellation for 48 hours
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 30,
                  borderTopWidth: 0.4,
                  borderColor: "black",
                }}
              >
                <Host />
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TourDetailScreen;
