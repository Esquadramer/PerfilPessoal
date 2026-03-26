"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

// Interface para os dados do perfil
interface SocialProfile {
  id: string
  username: string
  displayName: string
  email: string
  bio: string
  avatarUrl: string
  coverPhotoUrl: string
  socialLinks: SocialLink[]
  badges: Badge[]
  statistics: Statistics
  lastActive: Date
}

interface SocialLink {
  platform: 'instagram' | 'discord' | 'github' | 'whatsapp' | 'linkedin' | 'twitter' | 'email'
  url: string
  username?: string
  displayText?: string
}

interface Badge {
  id: string
  name: string
  icon: string
  color: string
  earnedAt: Date
}

interface Statistics {
  followers: number
  following: number
  projects: number
}

export default function SocialProfilePage() {
  const [profile, setProfile] = useState<SocialProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulando carregamento de dados
  useEffect(() => {
    const loadProfileData = async () => {
      // Em uma aplicação real, isso viria de uma API
      const profileData: SocialProfile = {
        id: "user-123",
        username: "Esquadramer",
        displayName: "Tiago de Freitas Machado",
        email: "tiagofreitasmachado@hotmail.com",
        bio: "Lembre-se que os loucos Fizeram a Arca e os Espertos o Titanic.",
        avatarUrl: "/icons/Eu.jpg",
        coverPhotoUrl: "/images/medieval-bg.jpg",
        socialLinks: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/__freitasmachado.index__/',
            username: '__freitasmachado.index__',
            displayText: 'Siga no Instagram'
          },
          {
            platform: 'discord',
            url: 'https://discord.gg/5aF9AtPKqu',
            username: 'tiagomachadoo',
            displayText: 'Entre no Discord'
          },
          {
            platform: 'whatsapp',
            url: 'https://wa.me/5541985061032',
            username: '+55 41 98506-1032',
            displayText: 'Chame no WhatsApp'
          },
          {
            platform: 'github',
            url: 'https://github.com/Esquadramer',
            username: 'SrFearless',
            displayText: 'Acesse o Github'
          },
          {
            platform: 'linkedin',
            url: 'https://www.linkedin.com/in/tiagofreitasmachado',
            username: 'Tiago de Freitas Machado',
            displayText: 'Conecte no Linkedin'
          },
          {
            platform: 'email',
            url: 'mailto:tiagofreitasmachado@hotmail.com',
            username: 'tiagofreitasmachado@hotmail.com',
            displayText: 'Envie um E-mail'
          }
        ],
        badges: [
          {
            id: 'pixel-master',
            name: 'Iniciante Pixelart',
            icon: '🎨',
            color: '#10b981',
            earnedAt: new Date('2023-05-15')
          },
          {
            id: 'animation-wizard',
            name: 'Junior Developer Full-stack',
            icon: '✨',
            color: '#8b5cf6',
            earnedAt: new Date('2023-08-22')
          },
          {
            id: 'animation-wizard',
            name: 'Gente Boa',
            icon: '😀',
            color: '#8b5cf6',
            earnedAt: new Date('2023-08-22')
          },
          {
            id: 'game-dev',
            name: 'Desenvolvedor de Jogos',
            icon: '🎮',
            color: '#f59e0b',
            earnedAt: new Date('2023-11-10')
          }
        ],
        statistics: {
          followers: 102,
          following: 102,
          projects: 12,
        },
        lastActive: new Date()
      }
      
      setProfile(profileData)
      setIsLoading(false)
    }

    loadProfileData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-900 bg-cover bg-fixed flex items-center justify-center">
        <div className="text-amber-400 font-pixel text-xl">Carregando perfil...</div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-stone-900 bg-cover bg-fixed flex items-center justify-center">
        <div className="text-amber-400 font-pixel text-xl">Perfil não encontrado</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
      {/* NavBar e RankingMarquee seriam inseridos aqui automaticamente */}

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Cabeçalho com foto de capa e avatar */}
        <div className="relative mb-12 rounded-lg overflow-hidden border-4 border-amber-700 shadow-xl">
          <div className="h-48 bg-gradient-to-r from-amber-900/70 to-stone-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-4xl font-pixel text-amber-400 text-center tracking-wider px-4">
              Perfil do Artesão
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center transform py-1">
            <div className="relative">
              <div className="absolute inset-0 border-5 border-amber-600 rounded-full transform rotate-6"></div>
              <img 
                src={profile.avatarUrl} 
                alt={`Avatar de ${profile.displayName}`}
                className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-stone-800 bg-stone-700"
              />
            </div>
          </div>
          
        {/* Informações do perfil */}
        <div className="mt-20 bg-stone-800/90 border-4 border-amber-700 rounded-lg p-6 md:p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-pixel text-amber-300 text-center">{profile.displayName}</h2>
              <p className="font-pixel text-amber-500 text-center">@{profile.username}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {profile.badges.map(badge => (
                <div 
                  key={badge.id}
                  className="flex items-center px-3 py-1 rounded-full border-2"
                  style={{ borderColor: badge.color, backgroundColor: `${badge.color}20` }}
                >
                  <span className="mr-2">{badge.icon}</span>
                  <span className="font-pixel text-xs text-amber-100">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-pixel text-amber-100 mb-6 leading-relaxed text-center">
            {profile.bio}
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 py-4 border-t border-amber-800/50">
            <div className="text-center">
              <div className="font-pixel text-2xl text-amber-300">{profile.statistics.followers}</div>
              <div className="font-pixel text-xs text-amber-500">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-amber-300">{profile.statistics.following}</div>
              <div className="font-pixel text-xs text-amber-500">Seguindo</div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-2xl text-amber-300">{profile.statistics.projects}</div>
              <div className="font-pixel text-xs text-amber-500">Projetos</div>
            </div>
          </div>
        </div>

        {/* Seção de links sociais */}
        <div className="bg-stone-800/90 border-4 border-amber-700 rounded-lg p-6 md:p-8 mb-8 shadow-xl">
          <h3 className="text-xl font-pixel text-amber-300 mb-6 flex items-center">
            <span className="mr-3">🔗</span> Conecte-se Comigo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.socialLinks.map((link, index) => (
              <Button 
                key={index}
                asChild
                className="font-pixel h-14 transition-all hover:scale-105"
                variant="outline"
              >
                <Link 
                  href={link.url} 
                  target="_blank"
                  className="flex items-center justify-center gap-2 border-2 border-amber-700 bg-stone-800 text-amber-200 hover:bg-amber-800/20"
                >
                  <span className="text-lg">
                    {link.platform === 'instagram' && '📷'}
                    {link.platform === 'discord' && '🎮'}
                    {link.platform === 'whatsapp' && '💬'}
                    {link.platform === 'email' && '📧'}
                    {link.platform === 'github' && '💻'}
                    {link.platform === 'twitter' && '🐦'}
                    {link.platform === 'linkedin' && '💼'}
                  </span>
                  <span>{link.displayText}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Voltar para galeria */}
        <div className="mt-12 text-center">
          <Button asChild className="font-pixel bg-stone-700 hover:bg-stone-600 text-amber-300 border border-amber-700">
            <Link href="/fotos">↩ Fotografias</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
