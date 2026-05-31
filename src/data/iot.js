export const iotTechnologies = [
  {
    id: 'arduino', name: 'Arduino', icon: '🔌', color: '#00979D',
    description: 'Open-source electronics platform based on easy-to-use hardware and software. Ideal for beginners building interactive IoT projects and prototypes.',
    difficulty: 'Beginner', popularity: 1, paradigms: ['Microcontroller', 'Embedded', 'Prototyping'],
    roadmapUrl: 'https://www.tutorialspoint.com/arduino/index.htm',
    tags: ['arduino', 'microcontroller', 'embedded', 'electronics', 'iot'],
    topics: ['Overview', 'Arduino IDE', 'Digital I/O', 'Analog I/O', 'PWM', 'Serial Communication', 'Sensors', 'Actuators', 'I2C/SPI', 'WiFi Shields', 'Power Management'],
    resources: [
      { name: 'Arduino Docs', url: 'https://docs.arduino.cc', type: 'Official' },
      { name: 'Arduino Project Hub', url: 'https://projecthub.arduino.cc', type: 'Projects' },
      { name: 'Arduino Forum', url: 'https://forum.arduino.cc', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Arduino Cheat Sheet', url: 'https://www.arduino.cc/reference/en/' },
    ],
    documentation: [
      { name: 'Arduino Language Reference', url: 'https://www.arduino.cc/reference/en/' },
      { name: 'Arduino Libraries', url: 'https://www.arduino.cc/reference/en/libraries/' },
    ],
    books: [
      { title: 'Arduino Cookbook', author: 'Michael Margolis' },
      { title: 'Getting Started with Arduino', author: 'Massimo Banzi' },
      { title: 'Arduino Projects Book', author: 'Arduino LLC' },
    ],
    interviewQuestions: [
      { question: 'What is a microcontroller?', difficulty: 'Easy' },
      { question: 'What is PWM?', difficulty: 'Medium' },
    ],
    roadmap: ['Electronics Basics', 'Arduino Setup', 'Digital & Analog I/O', 'Sensors & Actuators', 'Communication Protocols', 'IoT Connectivity', 'Project Building'],
    careerOpportunities: ['IoT Developer', 'Embedded Engineer', 'Hardware Engineer', 'Prototyping Engineer'],
  },
  {
    id: 'esp32', name: 'ESP32', icon: '📡', color: '#E7352B',
    description: 'Low-cost, low-power system-on-chip microcontroller with integrated WiFi and Bluetooth. Ideal for IoT, wearables, and smart home projects.',
    difficulty: 'Intermediate', popularity: 2, paradigms: ['Microcontroller', 'WiFi/BLE', 'Embedded'],
    roadmapUrl: 'https://docs.espressif.com/projects/esp-idf/en/latest/',
    tags: ['esp32', 'esp', 'microcontroller', 'wifi', 'bluetooth', 'iot'],
    topics: ['Overview', 'Setup (Arduino IDE)', 'GPIO Pins', 'WiFi Connectivity', 'Bluetooth/BLE', 'Deep Sleep', 'ADC/DAC', 'FreeRTOS', 'Over-the-Air Updates', 'MQTT', 'Camera'],
    resources: [
      { name: 'ESP32 Docs', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/', type: 'Official' },
      { name: 'Random Nerd Tutorials', url: 'https://randomnerdtutorials.com', type: 'Tutorial' },
      { name: 'ESP32 Forums', url: 'https://esp32.com', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'ESP32 Pin Reference', url: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/' },
    ],
    documentation: [
      { name: 'ESP-IDF Programming Guide', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/' },
      { name: 'ESP-BSP', url: 'https://github.com/espressif/esp-bsp' },
    ],
    books: [
      { title: 'ESP32 for IoT', author: 'D. P. Nagpal' },
      { title: 'MicroPython for ESP32', author: 'Mike O\'Connor' },
      { title: 'ESP32 Programming', author: 'Evandro L. S. Rezende' },
    ],
    interviewQuestions: [
      { question: 'What makes ESP32 different from Arduino?', difficulty: 'Easy' },
      { question: 'What is deep sleep mode?', difficulty: 'Medium' },
    ],
    roadmap: ['Electronics Basics', 'ESP32 Setup', 'GPIO & Peripherals', 'WiFi & BLE', 'MQTT & Protocols', 'Power Management', 'Advanced Applications'],
    careerOpportunities: ['IoT Developer', 'Embedded Engineer', 'Firmware Engineer', 'Hardware Engineer'],
  },
  {
    id: 'raspberry-pi', name: 'Raspberry Pi', icon: '🖥️', color: '#C51A4A',
    description: 'Affordable single-board computer running Linux. Used for IoT gateways, home automation, media centers, and educational computing projects.',
    difficulty: 'Beginner', popularity: 3, paradigms: ['Single-Board Computer', 'Linux', 'IoT Gateway'],
    roadmapUrl: 'https://www.raspberrypi.com/documentation/',
    tags: ['raspberry-pi', 'rpi', 'linux', 'iot', 'single-board-computer'],
    topics: ['Overview', 'Setup (Raspberry Pi OS)', 'GPIO Programming', 'Python on Pi', 'I2C/SPI', 'Camera Module', 'Pi as IoT Gateway', 'Home Automation', 'Media Center', 'Cluster Computing', 'Pi Pico'],
    resources: [
      { name: 'Raspberry Pi Docs', url: 'https://www.raspberrypi.com/documentation/', type: 'Official' },
      { name: 'Raspberry Pi Projects', url: 'https://projects.raspberrypi.org', type: 'Projects' },
      { name: 'Raspberry Pi Forums', url: 'https://forums.raspberrypi.com', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Raspberry Pi GPIO', url: 'https://www.raspberrypi.com/documentation/computers/os.html#gpio-and-the-40-pin-header' },
    ],
    documentation: [
      { name: 'Raspberry Pi OS', url: 'https://www.raspberrypi.com/documentation/computers/os.html' },
      { name: 'Pi GPIO Reference', url: 'https://pinout.xyz' },
    ],
    books: [
      { title: 'Raspberry Pi Cookbook', author: 'Simon Monk' },
      { title: 'Raspberry Pi for Dummies', author: 'Sean McManus' },
      { title: 'Raspberry Pi IoT Projects', author: 'John C. Shovic' },
    ],
    interviewQuestions: [
      { question: 'What is a single-board computer?', difficulty: 'Easy' },
      { question: 'How can a Pi be used as an IoT gateway?', difficulty: 'Medium' },
    ],
    roadmap: ['Linux Basics', 'Raspberry Pi Setup', 'Python Programming', 'GPIO & Electronics', 'IoT Projects', 'Home Automation', 'Advanced Applications'],
    careerOpportunities: ['IoT Developer', 'Embedded Linux Engineer', 'Maker/Prototyper', 'DevOps IoT Engineer'],
  },
  {
    id: 'mqtt', name: 'MQTT', icon: '📨', color: '#660066',
    description: 'Lightweight publish-subscribe messaging protocol designed for constrained IoT devices and low-bandwidth, high-latency networks.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['Messaging Protocol', 'Pub/Sub', 'IoT Communication'],
    roadmapUrl: 'https://mqtt.org',
    tags: ['mqtt', 'iot', 'messaging', 'protocol', 'pub-sub'],
    topics: ['Overview', 'MQTT Broker', 'Publish/Subscribe', 'Topics', 'QoS Levels', 'Retained Messages', 'Will Messages', 'Security (TLS/SSL)', 'Authentication', 'Bridges', 'MQTT vs HTTP'],
    resources: [
      { name: 'MQTT Docs', url: 'https://mqtt.org', type: 'Official' },
      { name: 'HiveMQ MQTT Guide', url: 'https://www.hivemq.com/mqtt-essentials/', type: 'Tutorial' },
      { name: 'MQTT Explorer', url: 'https://mqtt-explorer.com', type: 'Tool' },
    ],
    cheatSheets: [
      { name: 'MQTT Essentials', url: 'https://www.hivemq.com/mqtt-essentials/' },
    ],
    documentation: [
      { name: 'MQTT Specifications', url: 'https://mqtt.org/getting-started/' },
      { name: 'MQTT 5 Spec', url: 'https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html' },
    ],
    books: [
      { title: 'MQTT Essentials', author: 'Gastón Hillar' },
      { title: 'MQTT Programming', author: 'Swapnil Gharat' },
    ],
    interviewQuestions: [
      { question: 'What is MQTT?', difficulty: 'Easy' },
      { question: 'What are QoS levels in MQTT?', difficulty: 'Medium' },
    ],
    roadmap: ['IoT Basics', 'MQTT Concepts', 'Setting Up a Broker', 'Publishing & Subscribing', 'QoS & Security', 'Real-World Applications', 'Scalability'],
    careerOpportunities: ['IoT Developer', 'Embedded Engineer', 'Backend IoT Engineer', 'Solutions Architect'],
  },
  {
    id: 'home-assistant', name: 'Home Assistant', icon: '🏠', color: '#18BCF2',
    description: 'Open-source home automation platform that integrates with hundreds of smart home devices. Privacy-focused with local control and automation capabilities.',
    difficulty: 'Intermediate', popularity: 5, paradigms: ['Home Automation', 'Smart Home', 'IoT Platform'],
    roadmapUrl: 'https://www.home-assistant.io/docs/',
    tags: ['home-assistant', 'home-automation', 'smart-home', 'iot', 'python'],
    topics: ['Overview', 'Installation', 'Configuration', 'Integrations', 'Automations', 'Scripts', 'Scenes', 'Dashboards', 'Add-ons', 'Voice Assistants', 'Zigbee/Z-Wave'],
    resources: [
      { name: 'Home Assistant Docs', url: 'https://www.home-assistant.io/docs/', type: 'Official' },
      { name: 'Home Assistant Community', url: 'https://community.home-assistant.io', type: 'Community' },
      { name: 'HA GitHub', url: 'https://github.com/home-assistant/core', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'Home Assistant YAML', url: 'https://www.home-assistant.io/docs/configuration/' },
    ],
    documentation: [
      { name: 'Home Assistant Configuration', url: 'https://www.home-assistant.io/docs/configuration/' },
      { name: 'HA Blueprints', url: 'https://blueprints.home-assistant.io' },
    ],
    books: [
      { title: 'Home Assistant for Smart Home', author: 'Rohan Desai' },
      { title: 'Automating Your Home', author: 'Jeremy O\'Connell' },
    ],
    interviewQuestions: [
      { question: 'What is Home Assistant?', difficulty: 'Easy' },
      { question: 'What are automations in Home Assistant?', difficulty: 'Medium' },
    ],
    roadmap: ['Smart Home Basics', 'Home Assistant Setup', 'Configuration', 'Integrations', 'Automations', 'Dashboards', 'Advanced Features'],
    careerOpportunities: ['IoT Engineer', 'Smart Home Integrator', 'Automation Engineer', 'Maker'],
  },
  {
    id: 'aws-iot', name: 'AWS IoT', icon: '☁️', color: '#FF9900',
    description: 'Amazon\'s cloud IoT platform for connecting IoT devices to the cloud. Provides device management, data processing, and analytics at scale.',
    difficulty: 'Advanced', popularity: 6, paradigms: ['Cloud IoT', 'Device Management', 'IoT Platform'],
    roadmapUrl: 'https://docs.aws.amazon.com/iot/',
    tags: ['aws-iot', 'aws', 'iot', 'cloud', 'device-management'],
    topics: ['Overview', 'Device Gateway', 'Device Shadow', 'Rules Engine', 'Greengrass', 'IoT Analytics', 'SiteWise', 'FreeRTOS', 'Device Defender', 'Device Management', 'Fleet Provisioning'],
    resources: [
      { name: 'AWS IoT Docs', url: 'https://docs.aws.amazon.com/iot/', type: 'Official' },
      { name: 'AWS IoT Workshops', url: 'https://www.aws.training/IoT', type: 'Tutorial' },
      { name: 'AWS IoT Blog', url: 'https://aws.amazon.com/blogs/iot/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'AWS IoT Core', url: 'https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html' },
    ],
    documentation: [
      { name: 'AWS IoT Developer Guide', url: 'https://docs.aws.amazon.com/iot/latest/developerguide/' },
      { name: 'IoT Core Pricing', url: 'https://aws.amazon.com/iot-core/pricing/' },
    ],
    books: [
      { title: 'AWS IoT with Raspberry Pi', author: 'Agus Kurniawan' },
      { title: 'AWS IoT Programming', author: 'Anshul Garg' },
    ],
    interviewQuestions: [
      { question: 'What is AWS IoT Core?', difficulty: 'Easy' },
      { question: 'What is a device shadow?', difficulty: 'Medium' },
    ],
    roadmap: ['AWS Basics', 'IoT Concepts', 'AWS IoT Core', 'Device Shadows', 'Rules Engine', 'Greengrass', 'Analytics & Security'],
    careerOpportunities: ['Cloud IoT Engineer', 'IoT Architect', 'DevOps Engineer', 'Solutions Architect'],
  },
  {
    id: 'azure-iot-hub', name: 'Azure IoT Hub', icon: '🔷', color: '#0078D4',
    description: 'Microsoft\'s cloud IoT platform for connecting, monitoring, and managing IoT devices. Provides bi-directional communication at scale.',
    difficulty: 'Advanced', popularity: 7, paradigms: ['Cloud IoT', 'Device Management', 'Azure IoT'],
    roadmapUrl: 'https://learn.microsoft.com/en-us/azure/iot-hub/',
    tags: ['azure-iot-hub', 'azure', 'iot', 'cloud', 'device-management'],
    topics: ['Overview', 'IoT Hub Setup', 'Device Provisioning (DPS)', 'Device Twins', 'Direct Methods', 'Cloud-to-Device', 'Message Routing', 'IoT Edge', 'Time Series Insights', 'Security', 'Monitoring'],
    resources: [
      { name: 'Azure IoT Hub Docs', url: 'https://learn.microsoft.com/en-us/azure/iot-hub/', type: 'Official' },
      { name: 'Azure IoT Tutorials', url: 'https://learn.microsoft.com/en-us/azure/iot-hub/tutorial-connectivity', type: 'Tutorial' },
      { name: 'Azure IoT Blog', url: 'https://techcommunity.microsoft.com/category/azure-iot/blog', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Azure IoT Reference', url: 'https://learn.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide' },
    ],
    documentation: [
      { name: 'IoT Hub Developer Guide', url: 'https://learn.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide' },
      { name: 'Azure IoT Learn', url: 'https://learn.microsoft.com/en-us/training/azure-iot/' },
    ],
    books: [
      { title: 'Azure IoT Development', author: 'Sujay Gondi' },
      { title: 'IoT Edge in Action', author: 'Scott Allen' },
    ],
    interviewQuestions: [
      { question: 'What is Azure IoT Hub?', difficulty: 'Easy' },
      { question: 'What is DPS in Azure IoT?', difficulty: 'Medium' },
    ],
    roadmap: ['Azure Basics', 'IoT Concepts', 'IoT Hub Setup', 'Device Provisioning', 'Device Twins & Methods', 'IoT Edge', 'Security & Monitoring'],
    careerOpportunities: ['Cloud IoT Engineer', 'Azure IoT Developer', 'IoT Architect', 'Cloud Engineer'],
  },
]
