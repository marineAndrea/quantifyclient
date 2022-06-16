const data = {
  client: {
    name: 'Jane Doe',
    gender: 'F',
    age: 32,
    email: 'support@spotdx.com',
    currentDate: '2022-06-14T21:19:42.956Z',
    collectionTime: '2022-05-24T22:09:09.483Z',
    resultedTime: '2022-05-24T22:23:01.860Z',
  },
  axes: [
    {
      axis: 'Inflammation',
      category: 'biomarker',
      result: 50,
    },
    {
      axis: 'Metabolic',
      category: 'biomarker',
      result: 50,
    },
    {
      axis: 'Hormonal',
      category: 'biomarker',
      result: 50,
    },
    {
      axis: 'Activity',
      category: 'wearable',
      result: 50,
    },
    {
      axis: 'Sleep',
      category: 'wearable',
      result: 50,
    },
    {
      axis: 'Heart',
      category: 'wearable',
      result: 50,
    },
  ],
  biomarker: [
    {
      simpleLabel: 'vitD',
      label: '25-(OH) Vitamin D',
      parent: 'inflammation',
      weight: 1,
      result: 60,
      unit: 'ng/mL',
      ranges: {
        optimal: [10, 15],
        inRange: [25, 100],
        outOfRange: [0, 138],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 62.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'APOA1',
      label: 'Apolipoprotein A1 (APOA1)',
      parent: 'inflammation',
      weight: 1,
      result: 150,
      unit: 'mg/dL',
      ranges: {
        optimal: [10, 15],
        inRange: [25, 200],
        outOfRange: [100, 100],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 150,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'APOB',
      label: 'Apolipoprotein B (APOB)',
      parent: 'inflammation',
      weight: 1,
      result: 100,
      unit: 'mg/dL',
      ranges: {
        optimal: [10, 15],
        inRange: [50, 155],
        outOfRange: [0, 208],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 102.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'cortisol',
      label: 'Cortisol',
      parent: 'inflammation',
      weight: 1,
      result: 12.6,
      unit: 'ug/dL',
      ranges: {
        optimal: [10, 15],
        inRange: [2.3, 19.4],
        outOfRange: [0, 28],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 10.85,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'creatinine',
      label: 'Creatinine',
      parent: 'inflammation',
      weight: 1,
      result: 1.1,
      unit: 'mg/dL',
      ranges: {
        optimal: [10, 15],
        inRange: [0.7, 1.3],
        outOfRange: [0, 2],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 1,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'eGFR',
      label: 'eGFR',
      parent: 'inflammation',
      weight: 1,
      result: '>60 mL/min/1.73 m2',
      unit: '',
      ranges: {
        optimal: [10, 15],
        inRange: [60, null],
        outOfRange: [90, -30],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 30,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'estradiol',
      label: 'Estradiol (Sensitive)',
      parent: 'inflammation',
      weight: 1,
      result: 43.8,
      unit: 'pg/mL',
      ranges: {
        optimal: [10, 15],
        inRange: [0, 517],
        outOfRange: [0, 776],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 258.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'ferritin',
      label: 'Ferritin',
      parent: 'inflammation',
      weight: 1,
      result: 30,
      unit: 'ng/mL',
      ranges: {
        optimal: [10, 15],
        inRange: [11, 306.8],
        outOfRange: [0, 455],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 158.9,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'FSH',
      label: 'Follicle-Stimulating Hormone (FSH)',
      parent: 'inflammation',
      weight: 1,
      result: 7.2,
      unit: 'mIU/mL',
      ranges: {
        optimal: [10, 15],
        inRange: [3.85, 113.59],
        outOfRange: [0, 169],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 58.72,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'hbA1C',
      label: '% Hemoglobin A1C',
      parent: 'inflammation',
      weight: 1,
      result: 6,
      unit: '%',
      ranges: {
        optimal: [10, 15],
        inRange: [3.8, 6.4],
        outOfRange: [2, 8],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 5.1,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'CRP',
      label: 'High-Sensitivity CRP',
      parent: 'inflammation',
      weight: 1,
      result: 1.22,
      unit: 'mg/L',
      ranges: {
        optimal: [10, 15],
        inRange: [0, 3],
        outOfRange: [0, 5],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 1.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'insulin',
      label: 'Insulin',
      parent: 'inflammation',
      weight: 1,
      result: 5,
      unit: 'uIU/mL',
      ranges: {
        optimal: [10, 15],
        inRange: [1.9, 23],
        outOfRange: [0, 34],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 12.45,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'triglycerides',
      label: 'Triglycerides',
      parent: 'inflammation',
      weight: 1,
      result: 100,
      unit: 'mg/dL',
      ranges: {
        optimal: [10, 15],
        inRange: [0, 150],
        outOfRange: [0, 225],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 75,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
  ],
  wearable: [
    {
      simpleLabel: 'duration',
      label: 'Sleep Total Duration',
      parent: 'sleep',
      weight: 1,
      result: 356,
      unit: 'minutes',
      ranges: {
        optimal: [420, 540],
        inRange: [360, 600],
        outOfRange: [0, 960],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 480,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'total',
      label: 'Total Time in Bed',
      parent: 'sleep',
      weight: 1,
      result: 437,
      unit: 'minutes',
      ranges: {
        optimal: [450, 570],
        inRange: [390, 630],
        outOfRange: [0, 960],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 510,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'awake',
      label: 'Time Spent Awake in Bed',
      parent: 'sleep',
      weight: 1,
      result: 73,
      unit: 'minutes',
      ranges: {
        optimal: [0, 20],
        inRange: [0, 50],
        outOfRange: [50, 120],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 10,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'light',
      label: 'Light Sleep',
      parent: 'sleep',
      weight: 1,
      result: 216,
      unit: 'minutes',
      ranges: {
        optimal: [],
        inRange: [210, 240],
        outOfRange: [0, 500],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 225,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'rem',
      label: 'REM Sleep',
      parent: 'sleep',
      weight: 1,
      result: 69,
      unit: 'minutes',
      ranges: {
        optimal: [],
        inRange: [105, 120],
        outOfRange: [0, 300],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 113,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'deep',
      label: 'Deep Sleep',
      parent: 'sleep',
      weight: 1,
      result: 71,
      unit: 'minutes',
      ranges: {
        optimal: [],
        inRange: [72, 84],
        outOfRange: [0, 160],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 73,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'hrLowest',
      label: 'Minimum Heart Rate',
      parent: 'sleep',
      weight: 1,
      result: 48,
      unit: 'bpm',
      ranges: {
        optimal: [],
        inRange: [],
        outOfRange: [],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: null,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'hrAverage',
      label: 'Average Heart Rate',
      parent: 'sleep',
      weight: 1,
      result: 53,
      unit: 'bpm',
      ranges: {
        optimal: [],
        inRange: [],
        outOfRange: [],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'efficiency',
      label: 'Heart Efficiency',
      parent: 'sleep',
      weight: 1,
      result: 65,
      unit: '%',
      ranges: {
        optimal: [94, 95],
        inRange: [92, 95],
        outOfRange: [60, 92],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 95,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'latency',
      label: 'Sleep Latency',
      parent: 'sleep',
      weight: 1,
      result: 30,
      unit: 'minutes',
      ranges: {
        optimal: [],
        inRange: [10, 20],
        outOfRange: [20, 40],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 10,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'averageHrv ',
      label: 'Average Heart Rate Variability',
      parent: 'sleep',
      weight: 1,
      result: 63,
      unit: 'bpm',
      ranges: {
        optimal: [40, 50],
        inRange: [30, 50],
        outOfRange: [10, 30],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 50,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'respiratoryRate',
      label: 'Respiratory Rate',
      parent: 'sleep',
      weight: 1,
      result: 11,
      unit: 'bpm',
      ranges: {
        optimal: [13, 18],
        inRange: [12, 20],
        outOfRange: [5, 25],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 16,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'caloriesTotal',
      label: 'Total Calories Burned Per Day',
      parent: 'activity',
      weight: 1,
      result: 3131,
      unit: 'KCal',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'caloriesActive',
      label: 'Calories Burned During Exercise',
      parent: 'activity',
      weight: 1,
      result: 347,
      unit: 'KCal',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'steps',
      label: 'Daily Steps',
      parent: 'activity',
      weight: 1,
      result: 5479,
      unit: 'steps',
      ranges: {
        optimal: [8000, 14000],
        inRange: [6000, 8000],
        outOfRange: [0, 6000],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'dailyMovement',
      label: 'Distance Traveled',
      parent: 'activity',
      weight: 1,
      result: 4621,
      unit: 'bpm',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'lowActivity',
      label: 'Minutes Spent in Low Intensity Activities',
      parent: 'activity',
      weight: 1,
      result: 267,
      unit: 'bpm',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'mediumActivity',
      label: 'Minutes Spent in Medium Intensity Activities',
      parent: 'activity',
      weight: 1,
      result: 11,
      unit: 'bpm',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
    {
      simpleLabel: 'highActivity',
      label: 'Minutes Spent in High Intensity Activities',
      parent: 'activity',
      weight: 1,
      result: 0,
      unit: 'bpm',
      ranges: {
        optimal: [7.5, 9.5],
        inRange: [6.5, 10.5],
        outOfRange: [0, 16],
      },
      otherScores: [
        {
          comparison: 'target score',
          score: 8.5,
        },
        {
          comparison: 'all users average',
          score: 0,
        },
      ],
    },
  ],
}

export default data
