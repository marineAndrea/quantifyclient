const data = {
  axes: [
    {
      axis: 'Inflammation',
      category: 'biomarker',
      result: 20,
    },
    {
      axis: 'Metabolic',
      category: 'biomarker',
      result: 70,
    },
    {
      axis: 'Hormonal',
      category: 'biomarker',
      result: 40,
    },
    {
      axis: 'Activity',
      category: 'wearable',
      result: 20,
    },
    {
      axis: 'Sleep',
      category: 'wearable',
      result: 10,
    },
    {
      axis: 'Heart',
      category: 'wearable',
      result: 5,
    },
  ],
  biomarker: {
    spotClientData: {
      name: 'Jane Doe',
      gender: 'F',
      age: 32,
      email: 'support@spotdx.com',
      todayDate: 'Monday, 6/13/2022, 1:28 PM ET',
      collection_time: 'Tuesday, 5/24/2022, 6:09 PM ET',
      resulted_time: 'Tuesday, 5/24/2022, 6:23 PM ET',
    },
    spotBiomarkerData: [
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
          outOfRange: [0, 137.5],
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
          outOfRange: [0, 207.5],
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
          outOfRange: [0, 27.949999999999996],
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
          outOfRange: [0.3999999999999999, 1.6],
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
          outOfRange: [0, 775.5],
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
          outOfRange: [0, 454.70000000000005],
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
          outOfRange: [0, 168.46],
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
          outOfRange: [2.4999999999999996, 7.700000000000001],
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
          outOfRange: [0, 4.5],
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
          outOfRange: [0, 33.55],
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
  },
  wearable: {
    sleep: {
      duration: 26380,
      total: 23250,
      awake: 3130,
      light: 11840,
      rem: 5940,
      deep: 5470,
      hr_lowest: 48.666666666666664,
      hr_average: 55.333333333333336,
      efficiency: 88.33333333333333,
      latency: 1370,
      average_hrv: 37.666666666666664,
      respiratory_rate: 13,
    },
    activity: {
      calories_total: 2069.125,
      calories_active: 209,
      steps: 5547.25,
      daily_movement: 1265.875,
      low: 4869.375,
      medium: 1043.125,
      high: 79,
    },
  },
}

export default data
