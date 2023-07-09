import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GalleryImageModel} from '../../@types/GalleryImageModel';
import {GalleryImg} from '..';
import {useAppSelector} from '../../redux/hooks';
import {CommentsModal, ImageModal} from '../../modals';

const GalleryList = () => {
  const galleryImageList = useAppSelector(state => state?.gallery?.images);
  const [selectedImage, setSelectedImage] = useState({} as GalleryImageModel);
  const [isImageModalVisible, setImageModalVisibility] = useState(false);
  const [isCommentsModalVisible, setCommentsModalVisibility] = useState(false);

  return (
    <>
      <FlatList
        contentContainerStyle={styles.wrapper}
        numColumns={2}
        data={galleryImageList}
        renderItem={({item}) => (
          <View style={styles.imgWrapper}>
            <GalleryImg
              imageData={item}
              onPress={() => {
                setSelectedImage(item);
                setImageModalVisibility(true);
              }}
            />
            <Pressable
              onPress={() => {
                setSelectedImage(item);
                setCommentsModalVisibility(true);
              }}>
              <Text style={styles.showComments}>Show Comments</Text>
            </Pressable>
          </View>
        )}
        pagingEnabled
        keyExtractor={item => item.id.toString()}
      />
      <ImageModal
        image={selectedImage}
        onClose={() => setImageModalVisibility(false)}
        isVisible={isImageModalVisible}
      />
      <CommentsModal
        image={selectedImage}
        isVisible={isCommentsModalVisible}
        onClose={() => setCommentsModalVisibility(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center'},
  imgWrapper: {marginVertical: 20},
  showComments: {textAlign: 'center', marginTop: 8, fontSize: 17},
});

export default GalleryList;
