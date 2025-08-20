"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface PhotoAlbum {
  id: string
  title: string
  description: string
  coverImage: string
  imageCount: number
  createdAt: Date
}

interface GalleryImage {
  id: string
  title: string
  description: string
  url: string
  thumbnailUrl: string
  createdAt: Date
}

export default function PhotoAlbumPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [viewMode, setViewMode] = useState<'albums' | 'gallery'>('albums')

  // Dados de exemplo - em uma aplicação real, isso viria de uma API
  const albums: PhotoAlbum[] = [
    {
      id: "album-1",
      title: "Personagens",
      description: "Coleção de personagens pixelados com animações",
      coverImage: "/images/characters-thumb.jpg",
      imageCount: 24,
      createdAt: new Date('2023-03-15'),
    },
    {
      id: "album-2",
      title: "Cenários",
      description: "Ambientes e cenários para jogos indie",
      coverImage: "/images/scenarios-thumb.jpg",
      imageCount: 18,
      createdAt: new Date('2023-05-22'),
    },
    {
      id: "album-3",
      title: "Itens e Equipamentos",
      description: "Itens, armas e equipamentos pixelados",
      coverImage: "/images/items-thumb.jpg",
      imageCount: 32,
      createdAt: new Date('2023-07-10'),
    },
    {
      id: "album-4",
      title: "Animais e Criaturas",
      description: "Criaturas fantásticas e animais para jogos",
      coverImage: "/images/creatures-thumb.jpg",
      imageCount: 15,
      createdAt: new Date('2023-09-05'),
    }
  ]

  // Imagens de exemplo para o álbum selecionado
  const galleryImages: GalleryImage[] = [
    {
      id: "img-1",
      title: "Guerreiro Medieval",
      description: "Personagem guerreiro com armadura completa e espada",
      url: "/images/characters/warrior.png",
      thumbnailUrl: "/images/characters/warrior-thumb.png",
      createdAt: new Date('2023-03-20'),
    },
    {
      id: "img-2",
      title: "Mago Elemental",
      description: "Mago lançando feitiço de fogo com partículas",
      url: "/images/characters/mage.png",
      thumbnailUrl: "/images/characters/mage-thumb.png",
      createdAt: new Date('2023-04-05'),
    },
    {
      id: "img-3",
      title: "Arqueira Élfica",
      description: "Arqueira élfica em pose de disparo",
      url: "/images/characters/archer.png",
      thumbnailUrl: "/images/characters/archer-thumb.png",
      createdAt: new Date('2023-04-18'),
    },
    {
      id: "img-4",
      title: "Ladino Sombrio",
      description: "Ladino com capuz e adagas",
      url: "/images/characters/rogue.png",
      thumbnailUrl: "/images/characters/rogue-thumb.png",
      createdAt: new Date('2023-05-02'),
    }
  ]

  const handleAlbumSelect = (album: PhotoAlbum) => {
    setSelectedAlbum(album)
    setViewMode('gallery')
  }

  const handleImageSelect = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const handleBackToAlbums = () => {
    setSelectedAlbum(null)
    setViewMode('albums')
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-stone-900 bg-[url('/images/medieval-bg.jpg')] bg-cover bg-fixed">
      {/* NavBar e RankingMarquee seriam inseridos aqui automaticamente */}

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
              ? 'Explore minha coleção de fotos organizadas por categorias' 
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
                    <span className="font-pixel text-amber-400 text-sm">{album.imageCount} imagens</span>
                    <span className="font-pixel text-amber-500 text-xs">{album.createdAt.toLocaleDateString()}</span>
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
                  Exibindo <span className="text-amber-400">{galleryImages.length}</span> de {selectedAlbum.imageCount} imagens
                </div>
              </div>
            </div>

            {/* Grid de Imagens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {galleryImages.map(image => (
                <div 
                  key={image.id}
                  className="bg-stone-800/90 border-4 border-amber-700 rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleImageSelect(image)}
                >
                  <div className="h-40 overflow-hidden bg-stone-900 flex items-center justify-center">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.thumbnailUrl})` }}
                    ></div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-pixel text-amber-300 text-sm mb-1 truncate">{image.title}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-pixel text-amber-600 text-xs">
                        {image.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal de Visualização de Imagem */}
        {selectedImage && (
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
                  <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${selectedImage.url})` }}
                  ></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-pixel text-amber-300 mb-2">{selectedImage.title}</h3>
                      <p className="font-pixel text-amber-100">{selectedImage.description}</p>
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
            <Link href="/profile">👤 Ver Meu Perfil Completo</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}