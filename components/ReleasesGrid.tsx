'use client';

import { useEffect, useRef, useState } from 'react';
import SpotifyIcon from './SpotifyIcon';
import YouTubeIcon from './YouTubeIcon';

type ReleaseType = 'single' | 'ep' | 'album';
type FilterType = 'all' | ReleaseType;

interface Release {
  type: ReleaseType;
  year: string;
  title: string;
  artist: string;
  desc?: string;
  featured?: boolean;
  coverLabel: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}

const releases: Release[] = [
  {
    type: 'single',
    year: '2025',
    title: 'Título del lanzamiento',
    artist: 'Nombre del artista',
    desc: 'Producido y grabado íntegramente en Mapache Studio. Una propuesta que mezcla géneros y empuja los límites del sonido independiente.',
    featured: true,
    coverLabel: 'Portada del\nlanzamiento destacado',
    spotifyUrl: '#',
    youtubeUrl: '#',
  },
  {
    type: 'single',
    year: '2025',
    title: 'Título de la canción',
    artist: 'Artista',
    coverLabel: 'Portada\ndel lanzamiento',
    spotifyUrl: '#',
    youtubeUrl: '#',
  },
  {
    type: 'ep',
    year: '2024',
    title: 'Nombre del EP',
    artist: 'Artista',
    coverLabel: 'Portada\ndel EP',
    spotifyUrl: '#',
    youtubeUrl: '#',
  },
  {
    type: 'single',
    year: '2024',
    title: 'Título del single',
    artist: 'Artista feat. Artista',
    coverLabel: 'Portada\ndel single',
    spotifyUrl: '#',
    youtubeUrl: '#',
  },
  {
    type: 'album',
    year: '2024',
    title: 'Nombre del álbum',
    artist: 'Artista',
    coverLabel: 'Portada\ndel álbum',
    spotifyUrl: '#',
    youtubeUrl: '#',
  },
];

const typeLabel: Record<ReleaseType, string> = {
  single: 'Single',
  ep: 'EP',
  album: 'Álbum',
};

function ReleaseCard({ release, index }: { release: Release; index: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 80);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`release-card${release.featured ? ' featured' : ''}`}
    >
      <div className="release-cover">
        <div className="release-cover-placeholder">
          {release.coverLabel.split('\n').map((line, i) => (
            <span key={i}>{line}{i < release.coverLabel.split('\n').length - 1 && <br />}</span>
          ))}
        </div>
        <div className="release-overlay">
          {release.spotifyUrl && (
            <a href={release.spotifyUrl} className="stream-btn spotify" target="_blank" rel="noopener">
              <SpotifyIcon />
            </a>
          )}
          {release.youtubeUrl && (
            <a href={release.youtubeUrl} className="stream-btn youtube" target="_blank" rel="noopener">
              <YouTubeIcon />
            </a>
          )}
        </div>
      </div>
      <div className="release-info">
        <div className="release-meta">
          <span>{typeLabel[release.type]}</span>
          <span className="dot">·</span>
          <span>{release.year}</span>
        </div>
        <h2 className="release-title">{release.title}</h2>
        <p className="release-artist">{release.artist}</p>
        {release.desc && <p className="release-desc">{release.desc}</p>}
        <div className="release-links">
          {release.spotifyUrl && (
            <a href={release.spotifyUrl} className="link-pill spotify" target="_blank" rel="noopener">
              <SpotifyIcon size={14} />
            </a>
          )}
          {release.youtubeUrl && (
            <a href={release.youtubeUrl} className="link-pill youtube" target="_blank" rel="noopener">
              <YouTubeIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ReleasesGrid() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = releases.filter(r => filter === 'all' || r.type === filter);

  return (
    <>
      <div className="filter-bar">
        {(['all', 'single', 'ep', 'album'] as FilterType[]).map(f => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'Todos' : f === 'single' ? 'Singles' : f === 'ep' ? 'EPs' : 'Álbumes'}
          </button>
        ))}
      </div>
      <main className="releases-section">
        <div className="releases-grid">
          {filtered.map((release, i) => (
            <ReleaseCard key={`${release.title}-${i}`} release={release} index={i} />
          ))}
        </div>
      </main>
    </>
  );
}
