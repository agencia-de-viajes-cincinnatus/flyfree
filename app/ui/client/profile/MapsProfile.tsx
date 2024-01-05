'use client';
import React, { useState, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
export default function MapProfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const position = { lat: 53.54, lng: 10 };

  // Inicializa el servicio de Places cuando la API de Google Maps está disponible

  return (
    <>
      <APIProvider apiKey='AIzaSyCND2TGjll3kN_ymt6QZ2ZqPOIrpVyrnb4'>
        <div className='h-[90vh] w-[400px] m-4 relative'>
          {/* Título y Barra de búsqueda */}
          <h2 className='text-xl font-bold mb-4'>Map</h2>
          <div className='p-4 flex items-center justify-between bg-transparent z-10'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='border rounded p-2 mr-2 bg-transparent'
              />
              <button className='bg-blue-500 text-white p-2 rounded'>
                Buscar
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className='h-[80vh]'>
            <Map zoom={9} center={position} mapId='22eecc7f21bb0961'>
              <AdvancedMarker position={position}>
                <Pin
                  background='gray'
                  borderColor='white'
                  glyphColor='purple'
                />
                <InfoWindow>
                  <h1>InfoWindow</h1>
                  {searchResult && <p>Resultado de búsqueda: {searchResult}</p>}
                </InfoWindow>
              </AdvancedMarker>
            </Map>
          </div>
        </div>
      </APIProvider>
    </>
  );
}
