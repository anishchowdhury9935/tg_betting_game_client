// api.js
const API_BASE_URL = 'https://d97f-2405-201-4016-285d-f59a-26d2-b420-73c7.ngrok-free.app/api/bettingbasicdata'; // Change the URL based on your server
// Read betting data by bettingId
export const getBettingData = async (bettingId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${bettingId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch betting data');
        }

        const bet = await response.json();
        return bet;
    } catch (error) {
        console.error('Error fetching betting data:', error);
        // throw error;
    }
};

// Update betting data by bettingId
export const updateBettingData = async (bettingId, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${bettingId}/${data.winnerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update betting data');
        }

        const updatedBet = await response.json();
        return updatedBet;
    } catch (error) {
        console.error('Error updating betting data:', error);
        throw error;
    }
};

// Delete betting data by bettingId
export const deleteBettingData = async (bettingId, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${bettingId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete betting data');
        }
        return true; // Return true if the deletion was successful
    } catch (error) {
        console.error('Error deleting betting data:', error);
        throw error;
    }
};
