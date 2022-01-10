import { useContext, useEffect, useReducer } from "react"
import { Map, Marker, Popup } from "mapbox-gl"

import { MapContext } from "./MapContext"
import { mapReducer } from "./mapReducer"
import { PlacesContext } from ".."

export interface MapState {
    isMapReady: boolean,
    map?: Map,
    markers: Marker[],
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: [],
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props ) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext(PlacesContext);

    useEffect(() => {
        
        state.markers.forEach(marker => marker.remove());
        const newMarkers: Marker[] = [];

        for (const place of places) {
            const [lng, lat] = place.center;
            const popup = new Popup()
                .setHTML(`
                    <h6>${place.text_es}</h6>
                    <p>${place.place_name_es}</p>
                `);
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([lng, lat])
                .addTo(state.map!)

            newMarkers.push(newMarker);
        }

        //todo: limpiar polylines
        dispatch({ type: 'setMarkers', payload: newMarkers })

    }, [ places ])

    const setMap = (map: Map): void => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aquí estoy</h4>
                <p>En algún lugar del mundo</p>
            `)

        new Marker({
            color: '#61DAFB'
        })
            .setLngLat(map.getCenter())
            .setPopup( myLocationPopup )
            .addTo(map);

        dispatch({ type: 'setMap', payload: map })
    }

    return (
        <MapContext.Provider value={{
            ...state,

            //Methods
            setMap
        }}>
            { children }
        </MapContext.Provider>
        
    )
}
