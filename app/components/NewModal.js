import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
// import Slider from "@react-native-community/slider";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("screen");

const NewModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState("");

  const handleAdd = () => {
    if (value <= 10) {
      setValue((val) => val + 1);
    }
  };

  const handleRemove = () => {
    if (value > 0) {
      setValue((val) => val - 1);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "column",
                position: "absolute",
                left: 15,
                marginTop: SPACING * 5,
                width: "100%",
                // borderWidth: 1,
                // borderColor: "black",
                padding: 5

              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "600",
                  color: COLORS.formUi,
                }}
              >
                Details
              </Text>
              <View
                style={{
                  color: "black",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: '100%',
                  marginTop: 22,
                }}
              >
                <Text style={{ color: COLORS.formUi, fontSize: 20 }}>Guests</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ marginRight: 10, backgroundColor: '#ADD8E6', borderRadius: 20, padding: 3 }} onPress={handleRemove}>
                    <Ionicons name="remove-outline" size={SPACING * 2} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>{value}</Text>
                  <TouchableOpacity style={{ marginLeft: 10, backgroundColor: '#ADD8E6', borderRadius: 20, padding: 3 }} onPress={handleAdd}>
                    <Ionicons name="add" size={SPACING * 2} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{ position: "absolute", right: 10, top: 10 }}
            >
              <Ionicons name="close-outline" size={SPACING * 4} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: COLORS.primary,
          padding: SPACING * 1.5,
          marginHorizontal: SPACING * 1.5,
          borderRadius: SPACING * 2,
          flexDirection: "row",
          justifyContent: "center",
          bottom: width * 0.05,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SPACING * 2,
            fontWeight: "bold",
            marginRight: SPACING * 7,
            marginLeft: SPACING * 7,
          }}
        >
          Book Now
        </Text>
        <Ionicons
          name="arrow-forward"
          size={SPACING * 3}
          color={COLORS.white}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING * 2,
  },
  modalView: {
    margin: 20,
    width: "100%",
    height: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NewModal;

