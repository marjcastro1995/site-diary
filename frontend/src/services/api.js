import axios from 'axios';

const API_URL = 'http://localhost:5000/api/diaries';

export const fetchDiaries = () => axios.get(API_URL);
export const createDiary = (data) => axios.post(API_URL, data);
export const fetchDiaryById = (id) => axios.get(`${API_URL}/${id}`);

// Used the mocking local data to test out the frontend from the beginning

// // Mocking local data
// const mockDiaries = [
//     {
//         id: 1,
//         date: '2025-01-10',
//         description: 'Work progress: Concrete foundation completed.',
//         weather: 'Sunny',
//         imageUrl: 'http://localhost:5000/uploads/sample1.jpg',
//     },
//     {
//         id: 2,
//         date: '2025-01-11',
//         description: 'Work progress: Framing in progress.',
//         weather: 'Cloudy',
//         imageUrl: 'http://localhost:5000/uploads/sample2.jpg',
//     },
//     {
//         id: 3,
//         date: '2025-01-12',
//         description: 'Work progress: Electrical wiring started.',
//         weather: 'Rainy',
//         imageUrl: 'http://localhost:5000/uploads/sample3.jpg',
//     },
// ];

// // Simulate an API call to fetch all diary entries
// export const fetchDiaries = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ data: mockDiaries });
//         }, 500); // Simulating network delay
//     });
// };

// // Simulate an API call to create a new diary entry
// export const createDiary = (data) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const newDiary = { ...data, id: mockDiaries.length + 1 };
//             mockDiaries.push(newDiary);
//             resolve({ data: newDiary });
//         }, 500); // Simulating network delay
//     });
// };

// // Simulate an API call to fetch a diary by ID
// export const fetchDiaryById = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const diary = mockDiaries.find((diary) => diary.id === parseInt(id));
//             if (diary) {
//                 resolve({ data: diary });
//             } else {
//                 reject({ message: 'Diary not found' });
//             }
//         }, 500); // Simulating network delay
//     });
// };
