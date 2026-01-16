import { useColorScheme } from "@/hooks/use-color-scheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Zaroori hai
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName="screen/splashscreen/index"
          screenOptions={{ headerShown: false }}
        >
          {/* Splash aur Auth normal Stack mein rahenge */}
          <Stack.Screen name="screen/splashscreen/index" />
          <Stack.Screen name="screen/(auth)" />
          
          {/* (tabs) folder ke liye Drawer enable kiya gaya hai */}
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              // Isse drawer functionality initialize ho jayegi
            }} 
          />
        </Stack>

        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}