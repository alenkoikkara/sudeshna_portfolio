export const BG_TEXTS = ['Sudeshna Gangoli.', 'Work', 'About']

export const SECTIONS = [
  { id: 'home', bgText: 0 },
  { id: 'asap', bgText: 1 },
  { id: 'returnloop', bgText: 1 },
  { id: 'petclear', bgText: 1 },
  { id: 'about', bgText: 2 },
]

export const KEYFRAMES = [
  // home: huge phone filling the viewport (loading state)
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2, scale: 8, burst: 0 },
  // asap: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // returnloop: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // petclear: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // about: slide off-screen to the right
  { posX: 4.5, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI - 0.30, rotZ: 0.05, scale: 1.00 },
]

export const WORK_PROJECTS = [
  { 
    title: 'ASAP', 
    subtitle: 'AI-Powered Planning', 
    description: 'Helping college students build independent planning skills by breaking assignments into manageable steps until they no longer need the tool.',
    align: 'left' 
  },
  { 
    title: 'ReturnLoop', 
    subtitle: 'Effortless Returns', 
    description: 'Connecting people with neighborhood drivers to eliminate the errand of returning online purchases.',
    align: 'right' 
  },
  { 
    title: 'PetClear', 
    subtitle: 'Pet Travel Guide', 
    description: 'Personalized checklists for pet travel that tell you exactly what documents you need, where to get them, and when they are due.',
    align: 'left' 
  },
]

export const MAP_KEYFRAMES = [
  { x: 0, y: 0, opacity: 0 }, // Home
  { x: -840, y: -1979.75, opacity: 1 }, // ASAP
  { x: -2520, y: -4030.75, opacity: 1 }, // ReturnLoop
  { x: -4200, y: -2047.75, opacity: 1 }, // PetClear
  { x: -4200, y: -2047.75, opacity: 0 }, // About
]
