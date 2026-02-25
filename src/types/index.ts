export interface Project {
    id: number
    title: string
    description: string
    techStack: string[]
    githubUrl: string
    liveUrl?: string
    imageUrl?: string
}

export interface Skill {
    name: string
    category: 'frontend' | 'backend' | 'tools'
}