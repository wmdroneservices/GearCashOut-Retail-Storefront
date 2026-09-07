const HERO_CANDIDATES = [
  {
    "id": 1,
    "entity_type": "Category",
    "entity_name": "Camcorder",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 2,
    "entity_type": "Category",
    "entity_name": "Camera",
    "family": "camera",
    "candidate_title": "DSLR camera with multiple lenses on white",
    "image": "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-15945023/",
    "status": "candidate"
  },
  {
    "id": 3,
    "entity_type": "Category",
    "entity_name": "Camera Accessories",
    "family": "accessories",
    "candidate_title": "Camera and accessories on white",
    "image": "https://images.pexels.com/photos/32885747/pexels-photo-32885747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/sony-camera-and-accessories-on-white-background-32885747/",
    "status": "candidate"
  },
  {
    "id": 4,
    "entity_type": "Category",
    "entity_name": "Camera Bag",
    "family": "bag",
    "candidate_title": "Bags displayed on white",
    "image": "https://images.pexels.com/photos/22434759/pexels-photo-22434759.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/bags-on-white-background-22434759/",
    "status": "candidate"
  },
  {
    "id": 5,
    "entity_type": "Category",
    "entity_name": "Camera Control Unit",
    "family": "controller",
    "candidate_title": "Modern remote controller isolated on white",
    "image": "https://images.pexels.com/photos/7772534/pexels-photo-7772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/modern-clicker-on-white-background-7772534/",
    "status": "candidate"
  },
  {
    "id": 6,
    "entity_type": "Category",
    "entity_name": "Camera Equipment",
    "family": "camera",
    "candidate_title": "DSLR camera with multiple lenses on white",
    "image": "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-15945023/",
    "status": "candidate"
  },
  {
    "id": 7,
    "entity_type": "Category",
    "entity_name": "Camera Extension",
    "family": "accessories",
    "candidate_title": "Camera and accessories on white",
    "image": "https://images.pexels.com/photos/32885747/pexels-photo-32885747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/sony-camera-and-accessories-on-white-background-32885747/",
    "status": "candidate"
  },
  {
    "id": 8,
    "entity_type": "Category",
    "entity_name": "Camera Flash",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 9,
    "entity_type": "Category",
    "entity_name": "Camera Media",
    "family": "film",
    "candidate_title": "Camera film roll on white",
    "image": "https://images.pexels.com/photos/13771816/pexels-photo-13771816.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-film-lying-on-white-back-13771816/",
    "status": "candidate"
  },
  {
    "id": 10,
    "entity_type": "Category",
    "entity_name": "Camera Monitor",
    "family": "rigMonitor",
    "candidate_title": "Camera rig with external monitor on white",
    "image": "https://images.pexels.com/photos/14526289/pexels-photo-14526289.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/close-up-of-camera-14526289/",
    "status": "candidate"
  },
  {
    "id": 11,
    "entity_type": "Category",
    "entity_name": "Camera Payload",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 12,
    "entity_type": "Category",
    "entity_name": "Camera Rig",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 13,
    "entity_type": "Category",
    "entity_name": "Camera Slider",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 14,
    "entity_type": "Category",
    "entity_name": "Camera Supports",
    "family": "tripod",
    "candidate_title": "Professional camera on tripod against white",
    "image": "https://images.pexels.com/photos/5653947/pexels-photo-5653947.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-photo-camera-on-tripod-against-white-background-5653947/",
    "status": "candidate"
  },
  {
    "id": 15,
    "entity_type": "Category",
    "entity_name": "Cameras & Lenses",
    "family": "camera",
    "candidate_title": "DSLR camera with multiple lenses on white",
    "image": "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-15945023/",
    "status": "candidate"
  },
  {
    "id": 16,
    "entity_type": "Category",
    "entity_name": "Card Reader",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 17,
    "entity_type": "Category",
    "entity_name": "Cinema Camera",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 18,
    "entity_type": "Category",
    "entity_name": "Cinema Lens Kits",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 19,
    "entity_type": "Category",
    "entity_name": "Cinema Lenses",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 20,
    "entity_type": "Category",
    "entity_name": "Continuous Lighting",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 21,
    "entity_type": "Category",
    "entity_name": "Controller",
    "family": "controller",
    "candidate_title": "Modern remote controller isolated on white",
    "image": "https://images.pexels.com/photos/7772534/pexels-photo-7772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/modern-clicker-on-white-background-7772534/",
    "status": "candidate"
  },
  {
    "id": 22,
    "entity_type": "Category",
    "entity_name": "Dash Camera",
    "family": "action",
    "candidate_title": "Action camera on clean white",
    "image": "https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/kodak-pixpro-sp360-on-white-background-19297708/",
    "status": "candidate"
  },
  {
    "id": 23,
    "entity_type": "Category",
    "entity_name": "Deck/Recorder",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 24,
    "entity_type": "Category",
    "entity_name": "Digital Cinema Camera",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 25,
    "entity_type": "Category",
    "entity_name": "Digital Wireless Receiver",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 26,
    "entity_type": "Category",
    "entity_name": "DJI Goggles",
    "family": "vr",
    "candidate_title": "VR headset on white table",
    "image": "https://images.pexels.com/photos/4523059/pexels-photo-4523059.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/close-up-of-virtual-reality-goggles-4523059/",
    "status": "candidate"
  },
  {
    "id": 27,
    "entity_type": "Category",
    "entity_name": "Drone",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 28,
    "entity_type": "Category",
    "entity_name": "Drone Accessory",
    "family": "droneKit",
    "candidate_title": "Drone and controller on white backdrop",
    "image": "https://images.pexels.com/photos/19247750/pexels-photo-19247750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/dji-mavic-series-drone-remote-controller-and-battery-19247750/",
    "status": "candidate"
  },
  {
    "id": 29,
    "entity_type": "Category",
    "entity_name": "Film Camera",
    "family": "vintage",
    "candidate_title": "Vintage film camera floating on white",
    "image": "https://images.pexels.com/photos/4219113/pexels-photo-4219113.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/vintage-camera-on-white-background-4219113/",
    "status": "candidate"
  },
  {
    "id": 30,
    "entity_type": "Category",
    "entity_name": "Flash Accessories",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 31,
    "entity_type": "Category",
    "entity_name": "Flexible RGB Light",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 32,
    "entity_type": "Category",
    "entity_name": "FPV Equipment",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 33,
    "entity_type": "Category",
    "entity_name": "Gimbal",
    "family": "gimbal",
    "candidate_title": "High-tech gimbal in soft white studio",
    "image": "https://images.pexels.com/photos/25312268/pexels-photo-25312268.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/a-camera-tripod-with-a-white-sheet-on-it-25312268/",
    "status": "candidate"
  },
  {
    "id": 34,
    "entity_type": "Category",
    "entity_name": "HDR Production Converter",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 35,
    "entity_type": "Category",
    "entity_name": "IP Interface",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 36,
    "entity_type": "Category",
    "entity_name": "Lens Accessories",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 37,
    "entity_type": "Category",
    "entity_name": "Lens Control",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 38,
    "entity_type": "Category",
    "entity_name": "Lens Mount",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 39,
    "entity_type": "Category",
    "entity_name": "Lenses",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 40,
    "entity_type": "Category",
    "entity_name": "LiDAR Payload",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 41,
    "entity_type": "Category",
    "entity_name": "Lighting",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 42,
    "entity_type": "Category",
    "entity_name": "Lighting Modifier",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 43,
    "entity_type": "Category",
    "entity_name": "Lighting Support",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 44,
    "entity_type": "Category",
    "entity_name": "Live Production Switcher",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 45,
    "entity_type": "Category",
    "entity_name": "Master Setup Unit",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 46,
    "entity_type": "Category",
    "entity_name": "Media/Network Unit",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 47,
    "entity_type": "Category",
    "entity_name": "Memory Card",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 48,
    "entity_type": "Category",
    "entity_name": "Module",
    "family": "devices",
    "candidate_title": "Electronic devices on white backdrop",
    "image": "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/electronic-devices-on-white-background-16888144/",
    "status": "candidate"
  },
  {
    "id": 49,
    "entity_type": "Category",
    "entity_name": "Monitor",
    "family": "monitor",
    "candidate_title": "Minimal white monitor setup",
    "image": "https://images.pexels.com/photos/5185166/pexels-photo-5185166.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/white-computer-and-blank-screen-monitor-5185166/",
    "status": "candidate"
  },
  {
    "id": 50,
    "entity_type": "Category",
    "entity_name": "Monopod",
    "family": "tripod",
    "candidate_title": "Professional camera on tripod against white",
    "image": "https://images.pexels.com/photos/5653947/pexels-photo-5653947.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-photo-camera-on-tripod-against-white-background-5653947/",
    "status": "candidate"
  },
  {
    "id": 51,
    "entity_type": "Manufacturer",
    "entity_name": "Sony",
    "family": "cameraSingle",
    "candidate_title": "Professional mirrorless camera on white",
    "image": "https://images.pexels.com/photos/32129263/pexels-photo-32129263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-mirrorless-camera-on-white-background-32129263/",
    "status": "candidate"
  },
  {
    "id": 52,
    "entity_type": "Manufacturer",
    "entity_name": "Nikon",
    "family": "cameraSingle",
    "candidate_title": "Professional mirrorless camera on white",
    "image": "https://images.pexels.com/photos/32129263/pexels-photo-32129263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-mirrorless-camera-on-white-background-32129263/",
    "status": "candidate"
  },
  {
    "id": 53,
    "entity_type": "Manufacturer",
    "entity_name": "NEEWER",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 54,
    "entity_type": "Manufacturer",
    "entity_name": "DJI",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 55,
    "entity_type": "Manufacturer",
    "entity_name": "Panasonic",
    "family": "camera",
    "candidate_title": "DSLR camera with multiple lenses on white",
    "image": "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-15945023/",
    "status": "candidate"
  },
  {
    "id": 56,
    "entity_type": "Manufacturer",
    "entity_name": "Olympus/OM SYSTEM",
    "family": "cameraSingle",
    "candidate_title": "Professional mirrorless camera on white",
    "image": "https://images.pexels.com/photos/32129263/pexels-photo-32129263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-mirrorless-camera-on-white-background-32129263/",
    "status": "candidate"
  },
  {
    "id": 57,
    "entity_type": "Manufacturer",
    "entity_name": "Fujifilm",
    "family": "cameraSingle",
    "candidate_title": "Professional mirrorless camera on white",
    "image": "https://images.pexels.com/photos/32129263/pexels-photo-32129263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-mirrorless-camera-on-white-background-32129263/",
    "status": "candidate"
  },
  {
    "id": 58,
    "entity_type": "Manufacturer",
    "entity_name": "AKASO",
    "family": "action",
    "candidate_title": "Action camera on clean white",
    "image": "https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/kodak-pixpro-sp360-on-white-background-19297708/",
    "status": "candidate"
  },
  {
    "id": 59,
    "entity_type": "Manufacturer",
    "entity_name": "GoPro",
    "family": "actionAlt",
    "candidate_title": "Action camera on white",
    "image": "https://images.pexels.com/photos/92723/pexels-photo-92723.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/sport-camera-on-white-background-92723/",
    "status": "candidate"
  },
  {
    "id": 60,
    "entity_type": "Manufacturer",
    "entity_name": "SJCAM",
    "family": "action",
    "candidate_title": "Action camera on clean white",
    "image": "https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/kodak-pixpro-sp360-on-white-background-19297708/",
    "status": "candidate"
  },
  {
    "id": 61,
    "entity_type": "Manufacturer",
    "entity_name": "Casio",
    "family": "camera",
    "candidate_title": "DSLR camera with multiple lenses on white",
    "image": "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-15945023/",
    "status": "candidate"
  },
  {
    "id": 62,
    "entity_type": "Manufacturer",
    "entity_name": "Hubsan",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 63,
    "entity_type": "Manufacturer",
    "entity_name": "PowerVision",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 64,
    "entity_type": "Manufacturer",
    "entity_name": "Z CAM",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 65,
    "entity_type": "Manufacturer",
    "entity_name": "Skydio",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 66,
    "entity_type": "Manufacturer",
    "entity_name": "Parrot",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 67,
    "entity_type": "Manufacturer",
    "entity_name": "Tamron",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 68,
    "entity_type": "Manufacturer",
    "entity_name": "Polaroid",
    "family": "vintage",
    "candidate_title": "Vintage film camera floating on white",
    "image": "https://images.pexels.com/photos/4219113/pexels-photo-4219113.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/vintage-camera-on-white-background-4219113/",
    "status": "candidate"
  },
  {
    "id": 69,
    "entity_type": "Manufacturer",
    "entity_name": "RØDE",
    "family": "audio",
    "candidate_title": "Studio microphone on clean white",
    "image": "https://images.pexels.com/photos/12541646/pexels-photo-12541646.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/close-up-shot-of-a-microphone-12541646/",
    "status": "candidate"
  },
  {
    "id": 70,
    "entity_type": "Manufacturer",
    "entity_name": "RadioMaster",
    "family": "controller",
    "candidate_title": "Modern remote controller isolated on white",
    "image": "https://images.pexels.com/photos/7772534/pexels-photo-7772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/modern-clicker-on-white-background-7772534/",
    "status": "candidate"
  },
  {
    "id": 71,
    "entity_type": "Manufacturer",
    "entity_name": "Autel Robotics",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 72,
    "entity_type": "Manufacturer",
    "entity_name": "CaddxFPV",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 73,
    "entity_type": "Manufacturer",
    "entity_name": "Holy Stone",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 74,
    "entity_type": "Manufacturer",
    "entity_name": "Atomos",
    "family": "monitor",
    "candidate_title": "Minimal white monitor setup",
    "image": "https://images.pexels.com/photos/5185166/pexels-photo-5185166.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/white-computer-and-blank-screen-monitor-5185166/",
    "status": "candidate"
  },
  {
    "id": 75,
    "entity_type": "Manufacturer",
    "entity_name": "Bright Tangerine",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 76,
    "entity_type": "Product line",
    "entity_name": "Action Camera Cage",
    "family": "action",
    "candidate_title": "Action camera on clean white",
    "image": "https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/kodak-pixpro-sp360-on-white-background-19297708/",
    "status": "candidate"
  },
  {
    "id": 77,
    "entity_type": "Product line",
    "entity_name": "Action Cameras",
    "family": "action",
    "candidate_title": "Action camera on clean white",
    "image": "https://images.pexels.com/photos/19297708/pexels-photo-19297708.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/kodak-pixpro-sp360-on-white-background-19297708/",
    "status": "candidate"
  },
  {
    "id": 78,
    "entity_type": "Product line",
    "entity_name": "Audio Equipment",
    "family": "audio",
    "candidate_title": "Studio microphone on clean white",
    "image": "https://images.pexels.com/photos/12541646/pexels-photo-12541646.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/close-up-shot-of-a-microphone-12541646/",
    "status": "candidate"
  },
  {
    "id": 79,
    "entity_type": "Product line",
    "entity_name": "Background Support",
    "family": "studio",
    "candidate_title": "Photography studio with white backdrop",
    "image": "https://images.pexels.com/photos/7383648/pexels-photo-7383648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/photo-studio-set-up-7383648/",
    "status": "candidate"
  },
  {
    "id": 80,
    "entity_type": "Product line",
    "entity_name": "Bags & Cases",
    "family": "bag",
    "candidate_title": "Bags displayed on white",
    "image": "https://images.pexels.com/photos/22434759/pexels-photo-22434759.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/bags-on-white-background-22434759/",
    "status": "candidate"
  },
  {
    "id": 81,
    "entity_type": "Product line",
    "entity_name": "Batteries",
    "family": "battery",
    "candidate_title": "Camera battery and equipment on white",
    "image": "https://images.pexels.com/photos/6370386/pexels-photo-6370386.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/a-canon-camera-and-battery-on-a-white-surface-6370386/",
    "status": "candidate"
  },
  {
    "id": 82,
    "entity_type": "Product line",
    "entity_name": "Battery Grip",
    "family": "battery",
    "candidate_title": "Camera battery and equipment on white",
    "image": "https://images.pexels.com/photos/6370386/pexels-photo-6370386.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/a-canon-camera-and-battery-on-a-white-surface-6370386/",
    "status": "candidate"
  },
  {
    "id": 83,
    "entity_type": "Product line",
    "entity_name": "Boom Arms",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 84,
    "entity_type": "Product line",
    "entity_name": "Broadcast & Studio Cameras",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 85,
    "entity_type": "Product line",
    "entity_name": "C Stand",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 86,
    "entity_type": "Product line",
    "entity_name": "Cables",
    "family": "cable",
    "candidate_title": "White USB cable on white background",
    "image": "https://images.pexels.com/photos/12997240/pexels-photo-12997240.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/white-usb-cable-in-close-up-photography-12997240/",
    "status": "candidate"
  },
  {
    "id": 87,
    "entity_type": "Product line",
    "entity_name": "Camcorders",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 88,
    "entity_type": "Product line",
    "entity_name": "Camera & Video Monitors",
    "family": "rigMonitor",
    "candidate_title": "Camera rig with external monitor on white",
    "image": "https://images.pexels.com/photos/14526289/pexels-photo-14526289.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/close-up-of-camera-14526289/",
    "status": "candidate"
  },
  {
    "id": 89,
    "entity_type": "Product line",
    "entity_name": "Camera Accessories",
    "family": "accessories",
    "candidate_title": "Camera and accessories on white",
    "image": "https://images.pexels.com/photos/32885747/pexels-photo-32885747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/sony-camera-and-accessories-on-white-background-32885747/",
    "status": "candidate"
  },
  {
    "id": 90,
    "entity_type": "Product line",
    "entity_name": "Camera Batteries",
    "family": "battery",
    "candidate_title": "Camera battery and equipment on white",
    "image": "https://images.pexels.com/photos/6370386/pexels-photo-6370386.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/a-canon-camera-and-battery-on-a-white-surface-6370386/",
    "status": "candidate"
  },
  {
    "id": 91,
    "entity_type": "Product line",
    "entity_name": "Camera Cage",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 92,
    "entity_type": "Product line",
    "entity_name": "Camera Cages & Rigs",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 93,
    "entity_type": "Product line",
    "entity_name": "Camera Control Units",
    "family": "controller",
    "candidate_title": "Modern remote controller isolated on white",
    "image": "https://images.pexels.com/photos/7772534/pexels-photo-7772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/modern-clicker-on-white-background-7772534/",
    "status": "candidate"
  },
  {
    "id": 94,
    "entity_type": "Product line",
    "entity_name": "Camera Drones",
    "family": "drone",
    "candidate_title": "High-tech drone on minimal white background",
    "image": "https://images.pexels.com/photos/4141056/pexels-photo-4141056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/drone-on-white-background-4141056/",
    "status": "candidate"
  },
  {
    "id": 95,
    "entity_type": "Product line",
    "entity_name": "Camera Flash",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 96,
    "entity_type": "Product line",
    "entity_name": "Camera Flashes & Strobes",
    "family": "lighting",
    "candidate_title": "Professional softbox lighting setup on white",
    "image": "https://images.pexels.com/photos/28772534/pexels-photo-28772534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-studio-lighting-setup-on-white-background-28772534/",
    "status": "candidate"
  },
  {
    "id": 97,
    "entity_type": "Product line",
    "entity_name": "Camera Lenses",
    "family": "lens",
    "candidate_title": "Professional camera lens on plain white",
    "image": "https://images.pexels.com/photos/34956921/pexels-photo-34956921.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-lens-on-white-background-close-up-34956921/",
    "status": "candidate"
  },
  {
    "id": 98,
    "entity_type": "Product line",
    "entity_name": "Camera Mounts",
    "family": "tripod",
    "candidate_title": "Professional camera on tripod against white",
    "image": "https://images.pexels.com/photos/5653947/pexels-photo-5653947.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/professional-photo-camera-on-tripod-against-white-background-5653947/",
    "status": "candidate"
  },
  {
    "id": 99,
    "entity_type": "Product line",
    "entity_name": "Camera Rig Accessory",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  },
  {
    "id": 100,
    "entity_type": "Product line",
    "entity_name": "Camera Rigs & Support",
    "family": "videoRig",
    "candidate_title": "Professional video camera rig on white",
    "image": "https://images.pexels.com/photos/14526284/pexels-photo-14526284.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "source": "https://www.pexels.com/photo/camera-on-white-background-14526284/",
    "status": "candidate"
  }
];

const grid = document.querySelector("#hero-review-grid");
const search = document.querySelector("#hero-review-search");
const typeFilter = document.querySelector("#hero-review-type");
const count = document.querySelector("#hero-review-count");

function render() {
  const q = search.value.trim().toLowerCase();
  const type = typeFilter.value;
  const filtered = HERO_CANDIDATES.filter(item =>
    (!q || item.entity_name.toLowerCase().includes(q)) &&
    (!type || item.entity_type === type)
  );
  count.textContent = filtered.length + " candidate" + (filtered.length === 1 ? "" : "s");
  grid.innerHTML = filtered.map(item => `
    <article class="hero-review-card">
      <div class="hero-review-image"><img src="${item.image}" alt="${item.candidate_title}" loading="lazy"></div>
      <div class="hero-review-body">
        <div class="hero-review-meta"><span>${item.entity_type}</span><span>#${item.id}</span></div>
        <h2>${item.entity_name}</h2>
        <p>${item.candidate_title}</p>
        <a href="${item.source}" target="_blank" rel="noopener">Open source image ↗</a>
      </div>
    </article>
  `).join("");
}
search.addEventListener("input", render);
typeFilter.addEventListener("change", render);
render();
