export const initialState = {
    address: null,
    load: true,
    processing: false,
    disableSegment: true,
    downloadButton: false,
    error: false,
    showBuildingCount: false,
    showSolarPotential: false,
    appImageAdd: null,
    act_buildings: 0,
    pre_building: 0,
    act_area: 0,
    pre_area: 0,
    filename: null,
};

export function reducer(state, action) {
    switch (action.type) {
        case 'setFileName':
            return {
                ...state,
                filename: action.payload
            };
        case 'connectionOpen':
            return {
                ...state,
                processing: true,
                disableSegment: true
            };
        case 'connectionError':
            return {
                ...state,
                error: true
            };
        case 'connectionMessage':
            return {
                ...state,
                address: state.address.split(',')[0] + ',' + action.payload.split(',')[0],
                act_building: action.payload.split(',')[1],
                pre_building: action.payload.split(',')[2],
                act_area: action.payload.split(',')[3],
                pre_area: action.payload.split(',')[4],
                processing: false,
                disableSegment: true,
                downloadButton: true,
            };
        case 'readerLoadEnd':
            return {
                ...state,
                downloadButton: false,
                address: action.payload,
                load: false,
                disableSegment: false
            };
        case 'handleError':
            return {
                ...state,
                error: false
            };
        case 'buildingCount':
            return {
                ...state,
                showBuildingCount: true,
                appImageAdd: state.address,
            };
        case 'solarPotential':
            return {
                ...state,
                showSolarPotential: true,
                appImageAdd: state.address,
            };
        case 'closeSolar':
            return {
                ...state,
                showSolarPotential: false
            };
        case 'closeBuilding':
            return {
                ...state,
                showBuildingCount: false
            };
        default:
            return state;
    }
}
