"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MediaItem {
  id: string
  title: string
  description: string
  createdAt: Date
  type: 'image' | 'video' // Novo campo para identificar o tipo de mídia
}

interface ImageItem extends MediaItem {
  type: 'image'
  url: string
  thumbnailUrl: string
}

interface VideoItem extends MediaItem {
  type: 'video'
  url: string
  thumbnailUrl: string
  duration: string // Duração do vídeo no formato "mm:ss"
}

type GalleryMedia = ImageItem | VideoItem

interface PhotoAlbum {
  id: string
  title: string
  description: string
  coverImage: string
  createdAt: Date
  media: GalleryMedia[] // Agora aceita tanto imagens quanto vídeos
}

export default function PhotoAlbumPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null)
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null)
  const [viewMode, setViewMode] = useState<'albums' | 'gallery'>('albums')

  // Dados de exemplo com imagens e vídeos
  const albums: PhotoAlbum[] = [
    {
      id: "album-1",
      title: "Casual",
      description: "Fotos do Cotidiano como em Reuniões, Trabalho, Estudando ou só no Mundo da lua mesmo",
      coverImage: "/images/23.jpg",
      createdAt: new Date('2023-03-15'),
      media: [
        {
          id: "casual-1",
          type: 'image',
          title: "Fazendo Discurso",
          description: "Nada melhor do que boas noticias quando está rodeados de más",
          url: "/images/1.jpg",
          thumbnailUrl: "/images/1.jpg",
          createdAt: new Date('2023-03-16'),
        },
        {
          id: "casual-2",
          title: "Congresso",
          type: 'image',
          description: "Tomando um Chimarrão no Intervalo",
          url: "/images/3.jpg",
          thumbnailUrl: "/images/3.jpg",
          createdAt: new Date('2023-04-05'),
        },
        {
          id: "casual-3",
          title: "Pelotas-RS",
          type: 'image',
          description: "No mundo da Lua",
          url: "/images/4.jpg",
          thumbnailUrl: "/images/4.jpg",
          createdAt: new Date('2023-04-05'),
        },
        {
          id: "casual-4",
          title: "Bombinhas",
          type: 'image',
          description: "O Poder da Lua na palma da Mão",
          url: "/images/5.jpg",
          thumbnailUrl: "/images/5.jpg",
          createdAt: new Date('2023-04-05'),
        },
        {
          id: "casual-5",
          title: "Lospampas-RS",
          type: 'image',
          description: "Depois de Alimentado mexendo no celular",
          url: "/images/6.jpg",
          thumbnailUrl: "/images/6.jpg",
          createdAt: new Date('2023-04-05'),
        },
        {
          id: "casual-6",
          type: 'image',
          title: "Sorriso só meio Falso",
          description: "Tentando tirar uma 3x4 Informal",
          url: "/images/7.jpg",
          thumbnailUrl: "/images/7.jpg",
          createdAt: new Date('2023-04-05'),
        },
        {
          id: "casual-7",
          title: "Pego desprevenido",
          type: 'image',
          description: "Sem Óculos",
          url: "/images/8.jpg",
          thumbnailUrl: "/images/8.jpg",
          createdAt: new Date('2023-04-05'),
        }
      ]
    },
    {
      id: "album-2",
      title: "Eventos",
      description: "Não pode faltar o registro em Eventos ou Recreação no qual foi Inesquecível",
      coverImage: "/images/13.jpg",
      createdAt: new Date('2023-05-22'),
      media: [
        {
          id: "evento-1",
          title: "ComicCon 2022",
          type: 'image',
          description: "Foto com Superman",
          url: "/images/10.jpg",
          thumbnailUrl: "/images/10.jpg",
          createdAt: new Date('2023-05-25'),
        },
        {
          id: "evento-2",
          title: "ComicCon 2022",
          type: 'image',
          description: "Foto com o Deadpool",
          url: "/images/11.jpg",
          thumbnailUrl: "/images/11.jpg",
          createdAt: new Date('2023-06-10'),
        },
        {
          id: "evento-3",
          title: "ComicCon 2022",
          type: 'image',
          description: "Foto com a Diana do LoL",
          url: "/images/12.jpg",
          thumbnailUrl: "/images/12.jpg",
          createdAt: new Date('2023-06-18'),
        },
        {
          id: "evento-4",
          title: "ComicCon 2022",
          type: 'image',
          description: "Foto com a Melhor Franquia",
          url: "/images/13.jpg",
          thumbnailUrl: "/images/13.jpg",
          createdAt: new Date('2023-07-05'),
        },
        {
          id: "evento-5",
          title: "Bombeiro Civil Classe III",
          type: 'image',
          description: "Estágio em Abrigo",
          url: "/images/14.jpg",
          thumbnailUrl: "/images/14.jpg",
          createdAt: new Date('2023-07-05'),
        },
        {
          id: "evento-6",
          title: "Bombeiro Civil Classe III",
          type: 'image',
          description: "Minha Equipe",
          url: "/images/15.jpg",
          thumbnailUrl: "/images/15.jpg",
          createdAt: new Date('2023-07-05'),
        }
      ]
    },
    {
      id: "album-3",
      title: "Academia",
      description: "Treinos e Dietas Frenquentados para sempre ter uma boa Saúde",
      coverImage: "/images/24.jpg",
      createdAt: new Date('2023-07-10'),
      media: [
        {
          id: "academia-1",
          title: "Dia de Biceps",
          type: 'image',
          description: "Testando aquela camisa slin",
          url: "/images/16.jpg",
          thumbnailUrl: "/images/16.jpg",
          createdAt: new Date('2023-07-12'),
        },
        {
          id: "academia-2",
          title: "Dia de Perna",
          type: 'video',
          description: "Muito Sofrimento",
          url: "/images/17.mp4",
          thumbnailUrl: "/images/29.jpg",
          duration: "00:38",
          createdAt: new Date('2023-07-15'),
        },
        {
          id: "academia-3",
          title: "Dia de Triceps",
          type: 'video',
          description: "Quanto mais conseguir levantar melhor",
          url: "/images/18.mp4",
          thumbnailUrl: "/images/27.jpg",
          duration: "00:30",
          createdAt: new Date('2023-07-20'),
        },
        {
          id: "academia-4",
          title: "Dia de Costas",
          type: 'video',
          description: "Estampado na cara o sofrimento",
          url: "/images/19.mp4",
          thumbnailUrl: "/images/26.jpg",
          duration: "00:43",
          createdAt: new Date('2023-08-05'),
        },
        {
          id: "academia-4",
          title: "Martelo 🔨",
          type: 'video',
          description: "Porque tanta Careta?",
          url: "/images/20.mp4",
          thumbnailUrl: "/images/28.jpg",
          duration: "00:38",
          createdAt: new Date('2023-08-05'),
        },
        {
          id: "academia-5",
          title: "Serrote Unilateral",
          type: 'video',
          description: "Desculpe as caras feias",
          url: "/images/30.mp4",
          thumbnailUrl: "/images/31.jpg",
          duration: "00:28",
          createdAt: new Date('2025-08-05'),
        }
      ]
    }
  ]

  const handleAlbumSelect = (album: PhotoAlbum) => {
    setSelectedAlbum(album)
    setViewMode('gallery')
  }

  const handleMediaSelect = (media: GalleryMedia) => {
    setSelectedMedia(media)
  }

  const handleBackToAlbums = () => {
    setSelectedAlbum(null)
    setViewMode('albums')
    setSelectedMedia(null)
  }

  const handleCloseModal = () => {
    setSelectedMedia(null)
  }

  return (
    <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-pixel text-amber-400 mb-4 tracking-wider">
            {viewMode === 'albums' ? '📚 Álbuns' : `🖼️ ${selectedAlbum?.title}`}
          </h1>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="font-pixel text-amber-200 max-w-2xl mx-auto">
            {viewMode === 'albums' 
              ? 'Explore minha coleção de fotos e vídeos organizados por categorias' 
              : selectedAlbum?.description}
          </p>
        </div>

        {/* Botão Voltar quando na visualização de galeria */}
        {viewMode === 'gallery' && (
          <div className="mb-6">
            <Button 
              onClick={handleBackToAlbums}
              className="font-pixel bg-stone-700 hover:bg-stone-600 text-amber-300 border border-amber-700"
            >
              ↩ Voltar para Álbuns
            </Button>
          </div>
        )}

        {/* Visualização de Álbuns */}
        {viewMode === 'albums' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {albums.map(album => (
              <div 
                key={album.id}
                className="bg-stone-800/90 border-4 border-amber-700 rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleAlbumSelect(album)}
              >
                <div className="h-48 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${album.coverImage})` }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-pixel text-amber-300 mb-2">{album.title}</h3>
                  <p className="font-pixel text-amber-100 text-sm mb-3">{album.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-pixel text-amber-400 text-sm">
                      {album.media.length} {album.media.length === 1 ? 'item' : 'itens'}
                    </span>
                    <span className="font-pixel text-amber-500 text-xs">
                      {album.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Visualização de Galeria */}
        {viewMode === 'gallery' && selectedAlbum && (
          <>
            {/* Filtros e Estatísticas */}
            <div className="bg-stone-800/90 border-4 border-amber-700 rounded-lg p-4 mb-6 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-pixel text-amber-300">
                  Exibindo <span className="text-amber-400">{selectedAlbum.media.length}</span> itens no álbum "{selectedAlbum.title}"
                </div>
              </div>
            </div>

            {/* Grid de Mídia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {selectedAlbum.media.map(media => (
                <div 
                  key={media.id}
                  className="bg-stone-800/90 border-4 border-amber-700 rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-105 relative"
                  onClick={() => handleMediaSelect(media)}
                >
                  <div className="h-40 overflow-hidden bg-stone-900 flex items-center justify-center relative">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${media.type === 'image' ? media.thumbnailUrl : media.thumbnailUrl})` }}
                    ></div>
                    
                    {/* Indicador de vídeo */}
                    {media.type === 'video' && (
                      <>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-amber-600/80 flex items-center justify-center">
                            <svg className="w-6 h-6 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                          <span className="font-pixel text-xs text-amber-200">{media.duration}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="font-pixel text-amber-300 text-sm mb-1 truncate">{media.title}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-pixel text-amber-500 text-xs">
                        {media.type === 'image' ? 'Foto' : 'Vídeo'}
                      </span>
                      <span className="font-pixel text-amber-600 text-xs">
                        {media.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal de Visualização de Mídia */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
            <div className="bg-stone-800 border-4 border-amber-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <button 
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-900/80 flex items-center justify-center text-amber-400 font-pixel hover:bg-amber-700"
                  onClick={handleCloseModal}
                >
                  ✕
                </button>
                
                <div className="h-64 md:h-96 bg-stone-900 flex items-center justify-center">
                  {selectedMedia.type === 'image' ? (
                    <div 
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${selectedMedia.url})` }}
                    ></div>
                  ) : (
                    <video 
                      className="w-full h-full object-contain" 
                      controls
                      poster={selectedMedia.thumbnailUrl}
                    >
                      <source src={selectedMedia.url} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-pixel text-amber-300 mb-2">{selectedMedia.title}</h3>
                      <p className="font-pixel text-amber-100">{selectedMedia.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-pixel text-amber-400 bg-amber-900/50 px-2 py-1 rounded">
                        {selectedMedia.type === 'image' ? '📷 Foto' : '🎥 Vídeo'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rodapé com link para o perfil */}
        <div className="text-center mt-8">
          <Button asChild className="font-pixel bg-stone-700 hover:bg-stone-600 text-amber-300 border border-amber-700">
            <Link href="/">👤 Voltar ao Perfil</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
