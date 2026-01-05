// Simple module-level state
// Resets on page refresh, persists on client-side navigation

let hasSeenSplash = false;

export const getHasSeenSplash = () => hasSeenSplash;
export const setHasSeenSplash = (value) => {
    hasSeenSplash = value;
};
