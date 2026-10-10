export const sections = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
] as const

export const sectionIds = sections.map((s) => s.id) as unknown as string[]
