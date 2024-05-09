import { View, Text, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const SearchTexts = () => {

    const maxCharsPerLine = 21; // Adjust this value as per your requirement
    const searchHistory = 'Search anything here on YouTube';

    return (
        <View className='mt-2'>

            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
            
            {/* searches */}
            <View className='flex-row justify-between items-center mx-3 mb-7'>
                {/* icon */}
                <View>
                    <FontAwesome6 name="arrow-rotate-left" size={25} color="#454545" />
                </View>

                {/* Text and video */}
                <View className='flex-row gap-6 items-center'>
                    {/* text */}
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{searchHistory.length > maxCharsPerLine ? searchHistory.substring(0, maxCharsPerLine) + '...' : searchHistory}</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../assets/images/video.jpeg')} className='w-14 h-8 rounded-lg' />
                    </View>
                </View>

                {/* arrow */}
                <View>
                    <Feather name="arrow-up-left" size={30} color="#454545" />
                </View>
            </View>
            
        </View>
    )
}

export default SearchTexts