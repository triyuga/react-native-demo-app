# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Steps to generate this app

* `npx create-expo-app react-native-demo-app`
* Create Expo account https://expo.dev/
* Create Expo project `react-native-demo-app`
* Link with expo `eas init --id d13da8d8-d443-45cc-b5d3-bc0a0c467601`
* Follow steps here: https://docs.expo.dev/get-started/set-up-your-environment/
  * `eas build:configure` -> All
  * This creates a `eas.json` file
* Build locally `eas build --local`
  * Fastlane is not available, make sure it's installed and in your PATH
    * `brew install fastlane`
  * Cocoapods is not available, make sure it's installed and in your PATH
    * `brew install ruby`
    * `brew install cocoapods`
* Build for iOS device
  * `eas build --platform ios --profile development`
  * ensure `build.development.ios.simulator` = `false`
  * Go to Expo > Project > Builds > iOS Build > Install > Scan QR code with iOS Device
* Build for Android
  * `eas build --platform android --profile development`
  * Go to Expo > Project > Builds > Android Build > Install > Scan QR code with Android Device
* Build and run on all
  * `npx expo start`
  * scan QR code in console with iOS device -> loads app on iOS device
  * scan QR code in console with Android device -> loads app on Android device
  * press `i` -> loads app on XCode iOS emulator
  * press `a` -> loads app on Android studio emulator

## Adding a new native package dependency

Some react-native npm packages are [linked](https://reactnative.dev/docs/linking-libraries-ios) to native dependencies.
In such cases you'll need to uninstall, rebuild, and reinstall the app on you native devices and emulators.

After installing the package, you need to link the native dependencies. For Expo managed workflow, you can use:

For bare React Native projects, you might need to run:

Make sure to rebuild your project after installing new native dependencies.

```bash
npm install @react-native-async-storage/async-storage

```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. If you are looking to create a development build locally, rather than remotely on EAS, you can create local builds with `npx expo run:[android|ios]` or with `eas build --local`.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
