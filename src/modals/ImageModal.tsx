import React from 'react';
import AppModal from './AppModal';
import ImageZoom from '../components/ImageZoom/ImageZoom';
import {StyleSheet, View} from 'react-native';
import {GalleryImageModel} from '../@types/GalleryImageModel';
import {CloseBtn} from '../components';

type ImageModalProps = {
  image: GalleryImageModel;
  onClose: () => void;
  isVisible: boolean;
};

const ImageModal: React.FC<ImageModalProps> = ({image, onClose, isVisible}) => {
  return (
    <AppModal isVisible={isVisible} isDark>
      <View style={styles.closeBtnWrapper}>
        <CloseBtn onPress={onClose} isDark />
      </View>
      <View style={styles.wrapper}>
        <ImageZoom imageURI={image?.download_url} />
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnWrapper: {marginRight: 10, marginTop: 15},
});

export default ImageModal;
