export const mobileTechnologies = [
  {
    id: 'flutter', name: 'Flutter', icon: '💙', color: '#02569B',
    description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single Dart codebase. Fast development with hot reload.',
    difficulty: 'Intermediate', popularity: 1, paradigms: ['Cross-Platform', 'Declarative UI', 'Widget-Based'],
    roadmapUrl: 'https://roadmap.sh/flutter',
    tags: ['flutter', 'dart', 'mobile', 'cross-platform', 'google', 'ui'],
    topics: ['Overview', 'Setup', 'Dart Basics', 'Widgets', 'State Management', 'Navigation', 'Layouts', 'Forms', 'Networking', 'Animations', 'Testing'],
    resources: [
      { name: 'Flutter Docs', url: 'https://docs.flutter.dev', type: 'Official' },
      { name: 'Flutter Widget Catalog', url: 'https://docs.flutter.dev/ui/widgets', type: 'Reference' },
      { name: 'Flutter Community', url: 'https://flutter.dev/community', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Flutter Cheat Sheet', url: 'https://quickref.me/flutter' },
    ],
    documentation: [
      { name: 'Flutter API', url: 'https://api.flutter.dev' },
      { name: 'Pub.dev Packages', url: 'https://pub.dev' },
    ],
    books: [
      { title: 'Flutter Complete Reference', author: 'Alberto Miola' },
      { title: 'Beginning Flutter', author: 'Marco L. Napoli' },
      { title: 'Flutter Cookbook', author: 'Simone Alessandria' },
    ],
    interviewQuestions: [
      { question: 'What is a Widget in Flutter?', difficulty: 'Easy' },
      { question: 'What is the difference between StatefulWidget and StatelessWidget?', difficulty: 'Easy' },
      { question: 'Explain Flutter\'s rendering pipeline', difficulty: 'Hard' },
    ],
    roadmap: ['Dart Basics', 'Flutter Setup', 'Widgets Fundamentals', 'Layouts', 'State Management', 'Navigation & Routing', 'Networking & Storage', 'APIs & Backend', 'Testing', 'App Store Deployment'],
    careerOpportunities: ['Flutter Developer', 'Mobile App Developer', 'Cross-Platform Developer', 'Frontend Engineer'],
  },
  {
    id: 'react-native', name: 'React Native', icon: '📱', color: '#61DAFB',
    description: 'Meta\'s framework for building native mobile apps using React. Write in JavaScript/TypeScript, render native UI components on iOS and Android.',
    difficulty: 'Intermediate', popularity: 2, paradigms: ['Cross-Platform', 'Component-Based', 'JavaScript'],
    roadmapUrl: 'https://roadmap.sh/react-native',
    tags: ['react-native', 'react', 'mobile', 'cross-platform', 'javascript', 'meta'],
    topics: ['Overview', 'Setup', 'Components', 'Style', 'Navigation', 'State Management', 'Networking', 'FlatList', 'Animations', 'Native Modules', 'Testing'],
    resources: [
      { name: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started', type: 'Official' },
      { name: 'Expo Docs', url: 'https://docs.expo.dev', type: 'Documentation' },
      { name: 'React Native Community', url: 'https://reactnative.dev/community', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'React Native Cheat Sheet', url: 'https://quickref.me/react-native' },
    ],
    documentation: [
      { name: 'React Native API', url: 'https://reactnative.dev/docs/components-and-apis' },
      { name: 'React Native Directory', url: 'https://reactnative.directory' },
    ],
    books: [
      { title: 'React Native in Action', author: 'Nader Dabit' },
      { title: 'Fullstack React Native', author: 'Devin Abbott' },
      { title: 'React Native in Action', author: 'Nader Dabit' },
    ],
    interviewQuestions: [
      { question: 'What is the bridge in React Native?', difficulty: 'Medium' },
      { question: 'What is the difference between React and React Native?', difficulty: 'Easy' },
    ],
    roadmap: ['React Basics', 'React Native Setup', 'Core Components', 'Navigation', 'State Management', 'Native APIs', 'Publishing', 'Advanced Topics'],
    careerOpportunities: ['React Native Developer', 'Mobile Developer', 'Frontend Engineer', 'Cross-Platform Developer'],
  },
  {
    id: 'android', name: 'Android', icon: '🤖', color: '#3DDC84',
    description: 'Google\'s mobile operating system. Build native Android apps using Kotlin or Java with Android Studio and the Android SDK.',
    difficulty: 'Intermediate', popularity: 3, paradigms: ['Native Mobile', 'Android SDK', 'Kotlin/Java'],
    roadmapUrl: 'https://roadmap.sh/android',
    tags: ['android', 'kotlin', 'java', 'mobile', 'google', 'native'],
    topics: ['Overview', 'Android Studio', 'Activities', 'Fragments', 'Layouts', 'Intents', 'RecyclerView', 'Room Database', 'Networking (Retrofit)', 'Jetpack Compose', 'Material Design'],
    resources: [
      { name: 'Android Developers', url: 'https://developer.android.com/docs', type: 'Official' },
      { name: 'Android Codelabs', url: 'https://developer.android.com/codelabs', type: 'Tutorial' },
      { name: 'Android Developers Blog', url: 'https://android-developers.googleblog.com', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Android Cheat Sheet', url: 'https://developer.android.com/guide' },
    ],
    documentation: [
      { name: 'Android API Reference', url: 'https://developer.android.com/reference' },
      { name: 'Material Design for Android', url: 'https://m3.material.io/develop/android' },
    ],
    books: [
      { title: 'Android Programming: The Big Nerd Ranch Guide', author: 'Bill Phillips' },
      { title: 'Head First Android Development', author: 'Dawn Griffiths' },
      { title: 'Kotlin for Android Developers', author: 'Antonio Leiva' },
    ],
    interviewQuestions: [
      { question: 'What is an Activity in Android?', difficulty: 'Easy' },
      { question: 'Explain the Android activity lifecycle', difficulty: 'Medium' },
      { question: 'What is Jetpack Compose?', difficulty: 'Medium' },
    ],
    roadmap: ['Kotlin Basics', 'Android Studio', 'Activities & Fragments', 'UI Layouts', 'Navigation', 'Data Persistence', 'Networking', 'Jetpack Compose', 'Testing', 'Play Store'],
    careerOpportunities: ['Android Developer', 'Mobile Developer', 'Kotlin Developer', 'Software Engineer'],
  },
  {
    id: 'ios', name: 'iOS', icon: '🍎', color: '#555555',
    description: 'Apple\'s mobile operating system. Build native iOS and iPadOS apps using Swift with Xcode and the iOS SDK.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['Native Mobile', 'iOS SDK', 'Swift'],
    roadmapUrl: 'https://roadmap.sh/ios',
    tags: ['ios', 'swift', 'apple', 'mobile', 'native', 'swiftui'],
    topics: ['Overview', 'Xcode Setup', 'Swift Basics', 'UIKit', 'SwiftUI', 'View Controllers', 'Navigation', 'Auto Layout', 'Core Data', 'URLSession', 'App Lifecycle'],
    resources: [
      { name: 'Apple Developer', url: 'https://developer.apple.com/documentation/', type: 'Official' },
      { name: 'Hacking with Swift', url: 'https://www.hackingwithswift.com', type: 'Tutorial' },
      { name: 'Apple WWDC Videos', url: 'https://developer.apple.com/wwdc/', type: 'Video' },
    ],
    cheatSheets: [
      { name: 'Swift Cheat Sheet', url: 'https://quickref.me/swift' },
    ],
    documentation: [
      { name: 'iOS SDK', url: 'https://developer.apple.com/documentation/uikit' },
      { name: 'Swift Documentation', url: 'https://docs.swift.org/swift-book/' },
    ],
    books: [
      { title: 'iOS Programming: The Big Nerd Ranch Guide', author: 'Christian Keur' },
      { title: 'Swift Programming: The Big Nerd Ranch Guide', author: 'Mikey Ward' },
      { title: 'SwiftUI by Tutorials', author: 'raywenderlich Tutorial Team' },
    ],
    interviewQuestions: [
      { question: 'What is a ViewController?', difficulty: 'Easy' },
      { question: 'What is the difference between UIKit and SwiftUI?', difficulty: 'Medium' },
      { question: 'Explain ARC in iOS', difficulty: 'Hard' },
    ],
    roadmap: ['Swift Basics', 'Xcode & Interface Builder', 'UIKit Fundamentals', 'Navigation & Data Flow', 'Networking & Storage', 'SwiftUI', 'Testing', 'App Store'],
    careerOpportunities: ['iOS Developer', 'Swift Developer', 'Mobile Developer', 'macOS Developer'],
  },
  {
    id: 'xamarin', name: 'Xamarin', icon: '🔷', color: '#3498DB',
    description: 'Microsoft\'s cross-platform mobile development framework using .NET and C#. Share code across iOS, Android, and Windows with native performance.',
    difficulty: 'Intermediate', popularity: 5, paradigms: ['Cross-Platform', '.NET', 'C#'],
    roadmapUrl: 'https://www.tutorialspoint.com/xamarin/index.htm',
    tags: ['xamarin', 'microsoft', 'dotnet', 'csharp', 'cross-platform', 'mobile'],
    topics: ['Overview', 'Setup', 'Xamarin.Forms', 'XAML', 'MVVM Pattern', 'Pages & Navigation', 'Data Binding', 'Platform-Specific APIs', 'Dependency Service', 'Custom Renderers', 'Testing'],
    resources: [
      { name: 'Xamarin Docs', url: 'https://learn.microsoft.com/en-us/xamarin/', type: 'Official' },
      { name: '.NET MAUI Docs', url: 'https://learn.microsoft.com/en-us/dotnet/maui/', type: 'Documentation' },
      { name: '.NET MAUI GitHub', url: 'https://github.com/dotnet/maui', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'XAML Cheat Sheet', url: 'https://learn.microsoft.com/en-us/xamarin/xamarin-forms/xaml/' },
    ],
    documentation: [
      { name: 'Xamarin API', url: 'https://learn.microsoft.com/en-us/dotnet/api/xamarin.forms' },
      { name: '.NET MAUI Community Toolkit', url: 'https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/' },
    ],
    books: [
      { title: 'Xamarin in Action', author: 'Jim Bennett' },
      { title: 'Mastering Xamarin.Forms', author: 'Ed Snider' },
    ],
    interviewQuestions: [
      { question: 'What is Xamarin.Forms?', difficulty: 'Easy' },
      { question: 'What is .NET MAUI?', difficulty: 'Medium' },
    ],
    roadmap: ['C# Basics', 'Xamarin Setup', 'XAML & Pages', 'MVVM', 'Navigation', 'Platform APIs', 'Publishing', 'Migration to .NET MAUI'],
    careerOpportunities: ['Xamarin Developer', '.NET Developer', 'Mobile Developer', 'Cross-Platform Developer'],
  },
  {
    id: 'ionic', name: 'Ionic', icon: '⚡', color: '#3880FF',
    description: 'Open-source framework for building cross-platform mobile and web apps with HTML, CSS, and JavaScript/TypeScript. Uses Capacitor for native access.',
    difficulty: 'Beginner', popularity: 6, paradigms: ['Cross-Platform', 'Hybrid', 'Web Technologies'],
    roadmapUrl: 'https://www.tutorialspoint.com/ionic/index.htm',
    tags: ['ionic', 'hybrid', 'mobile', 'web', 'angular', 'react', 'capacitor'],
    topics: ['Overview', 'Setup', 'UI Components', 'Navigation', 'Storage', 'Native APIs (Capacitor)', 'Theming', 'Forms & Validation', 'Push Notifications', 'Publishing', 'Progressive Web Apps'],
    resources: [
      { name: 'Ionic Docs', url: 'https://ionicframework.com/docs', type: 'Official' },
      { name: 'Ionic Tutorials', url: 'https://ionicframework.com/docs/intro/next', type: 'Tutorial' },
      { name: 'Ionic Forum', url: 'https://forum.ionicframework.com', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Ionic Components', url: 'https://ionicframework.com/docs/components' },
    ],
    documentation: [
      { name: 'Ionic API', url: 'https://ionicframework.com/docs/api' },
      { name: 'Capacitor Docs', url: 'https://capacitorjs.com/docs' },
    ],
    books: [
      { title: 'Ionic in Action', author: 'Matt Kremer' },
      { title: 'Developing Ionic Apps', author: 'Sani Yusuf' },
    ],
    interviewQuestions: [
      { question: 'What is Capacitor?', difficulty: 'Medium' },
      { question: 'How does Ionic differ from React Native?', difficulty: 'Medium' },
    ],
    roadmap: ['Web Basics', 'Ionic Setup', 'UI Components', 'Navigation', 'Capacitor Plugins', 'State Management', 'Testing', 'App Store'],
    careerOpportunities: ['Ionic Developer', 'Hybrid App Developer', 'Frontend Engineer', 'Mobile Web Developer'],
  },
]
