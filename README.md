# reacte-native-tasklist
Beispielanwendung mit React Native

## Tools:
- Chocolatey: Package Manager für Windows
    Powershell mit Admin-Rechten öffnen und folgende Zeile ausführen:
    Set-ExecutionPolicy AllSigned; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    Danach (falls nicht vorhanden) nodejs, python und jdk 8 installieren (nicht zutreffendes einfach weglassen):
- Node.js (mind. Version 4?), python 2 und JDK
    choco install -y nodejs.install python2 jdk8
- React Native Command Line Interface
    npm install -g react-native-cli
- Android development environment
    Aktuelles SDK für Android herunterladen und istallieren
    Google APIs
    Android SDK Plattform 23 (für Android 6.0+)
    * Für den Android Emulator unter Windows *
    Intel x86 Atom_64 System Image
    Google APIs Intel x86 Atom_64 System Image
    * Echtes Android Gerät *
    Spezifische Treiber (z.B. Samsung)
    USB Debugging aktivieren auf dem Geräte
    Connecten mit adb: Windows Konsole oder Powershell Kommando ausführen: adb devices
- JAVA_HOME Umgebungsvariable zum * JDK *
- ANDROID_HOME Umgebungsvariable zum Android SDK
- Visual Studio Code (IDE)
- Visual Studio Code React Native extension
    https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native

## Ausführen auf einem Gerät zum entwickeln
- Über USB Verbinden (USB Debuggin aktivieren)
- Windows Konsole: adb devices
- Starten der App:
    1. Über Windows Konsole: Ordner öffnen und 'reacte-native run-android' ausführen
    2. Über VS-Code Plugin: Ctrl+Shift+p -> react native run...