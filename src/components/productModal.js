import React, {useState} from 'react';
import { 
    View,  
    Text,
    Image,
    StyleSheet,
    Modal,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
 
 
import BagModal from '../components/bagModal'

const ProductModal = (props) => {
    const background = props.item.background

    const [bagVisible, setBagVisible] = useState(false)

    const ToggleBagVisible = () => {
        setBagVisible(!bagVisible)
    }
    return (
        <View style={{flex: 1}}>
            <Modal 
                animationType="slide" 
                visible={bagVisible}
                onRequestClose={() => ToggleBagVisible()}>
                    <BagModal closeModal={() => ToggleBagVisible()} />
            </Modal>
            <View style={[styles.container, {backgroundColor: "white"}]}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Icon name="keyboard-arrow-left" size={30} color={"pink"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ToggleBagVisible()}>
                        <Icon name="shopping-cart" size={30} color={"pink"} />
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={styles.imgContainer}>
                    <Image source={props.item.image} style={{width: 220, height: 220}} />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.sizesContainer}>
                            <View style={[styles.sizeCircleContainer, {backgroundColor: background}]}><Text>S</Text></View>
                            <View style={styles.sizeCircleContainer}><Text>M</Text></View>
                            <View style={styles.sizeCircleContainer}><Text>L</Text></View>
                        </View>
                        <Text style={styles.priceText}>{props.item.price}$</Text>
                    </View>
                    <Text style={styles.descriptionText}>{props.item.description}</Text>
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={[styles.btnContainer, {marginRight: 10, borderColor: "background"}]}>
                        <Icon name="bookmark" size={30} color={background} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnContainer, {flex: 1,backgroundColor: background, borderColor: background}]}>
                        <Text style={styles.btnText}>ADD TO CARD</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    badgeContainer: {
        top: -4, 
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        backgroundColor: "white"
    },
    badgeText: {
        color: "green"
    },
    imgContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white"
    },
    sizesContainer: {
        flexDirection: 'row'
    },
    sizeCircleContainer: {
        width: 30, 
        height: 30,
        marginRight: 10,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "grey",
        backgroundColor: "grey",
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    descriptionText: {
        marginTop: 20,
        fontWeight: '900',
        fontSize: 12,
        color: 'green'
    },
    footerContainer: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 13
    }
});

export default ProductModal;