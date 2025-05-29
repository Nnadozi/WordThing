import MyButton from '@/components/MyButton';
import Page from '@/components/Page';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const Appearance = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    router.back();
  };

  return (
    <Page>
      <Modal
        visible={modalVisible}
        onRequestClose={handleClose}
        animationType="fade"
        transparent={true} // Needed for custom size/modal styling
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <MyButton title="Close Modal" onPress={handleClose} />
                {/* You can add theme toggles or other UI here */}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Page>
  );
};

export default Appearance;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    padding: 24,
    borderRadius: 16,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
