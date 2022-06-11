import React from 'react';
import { 
    View,  
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
 

// import clothes from products
import * as Products from '../contants/ProductsData/products'

// import product component
import ProductBagComponent from '../components/productBagComponent'

const BagModal = (props) => {
    
    return (    
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Your Bag</Text>
                    <Text style={styles.headerSubTitle}>6 ITEMS</Text>
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Products.clothes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ProductBagComponent item={item} />
                            )
                        }} 
                    />
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>CHECKOUT</Text>
                        <Icon name="keyboard-arrow-right" size={30} color={"yellow"} />
                    </TouchableOpacity>
                </View>
            </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "white"
    },
    header: {
        height: 80,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 12
    },
    headerSubTitle: {
        fontSize: 15,
        color: "grey"
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    footerContainer: {
        padding: 20,
        backgroundColor: "white"
    },
    btnContainer: {
        flex: 1,
        padding: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        flexDirection: 'row',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor:"green"
    }
});

export default BagModal;