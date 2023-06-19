import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

function Login(){
    return (
       <SafeAreaView className="bg-primary">
        <View className= " bg-primary h-2/5 " >
            <View className="p-7 my-auto mb-4">
                <Text className="text-white text-2xl ">
                    Hey!
                </Text>
                <Text className="text-white text-2xl">
                    Join Now
                </Text>
            </View>
        </View>
        <View className=" bg-secondary h-3/5 rounded-t-[30] ">
            <View className="flex flex-row items-center justify-center gap-32 p-3 ">
                <TouchableOpacity>
                    <Text className="text-primary text-lg font-bold">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-primary text-lg font-bold">SignUp</Text>
                </TouchableOpacity>

                
            </View>

        </View>
       </SafeAreaView>
    )
}

export default Login;