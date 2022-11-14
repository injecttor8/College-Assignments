let mahasiswa = [
    {
        'nama':'reza',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7,
        'nilai':[
          {
            'algoritma':80,
            'testing':85,
            'pemrograman':90
          }
        ],
        'grade':[
          {
            'algoritma':null,
            'testing':null,
            'pemrograman':null
          }
        ]
    },
    {
        'nama':'fathur',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7,
        'nilai':[
          {
            'algoritma':85,
            'testing':85,
            'pemrograman':85
          }
        ],
        'grade':[
          {
            'algoritma':null,
            'testing':null,
            'pemrograman':null
          }
        ]
        
    },
    {
        'nama':'gagan',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7,
        'nilai':[
          {
            'algoritma':88,
            'testing':86,
            'pemrograman':84
          }
        ],
        'grade':[
          {
            'algoritma':null,
            'testing':null,
            'pemrograman':null
          }
        ]
        
    },
    {
        'nama':'angga',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7,
        'nilai':[
          {
            'algoritma':86,
            'testing':85,
            'pemrograman':85
          }
        ],
        'grade':[
          {
            'algoritma':null,
            'testing':null,
            'pemrograman':null
          }
        ]
        
    },
    {
        'nama':'wisnu',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7,
        'nilai':[
          {
            'algoritma':80,
            'testing':88,
            'pemrograman':90
          }
        ],
        'grade':[
          {
            'algoritma':null,
            'testing':null,
            'pemrograman':null
          }
        ]
    }]
    
let i=0
while (i < mahasiswa.length){
    for(const key in mahasiswa[i]["nilai"][0]){
      if(mahasiswa[i]["nilai"][0][key] >=85){
        mahasiswa[i]["grade"][0][key] = 'A'
      }
      else if(mahasiswa[i]["nilai"][0][key] >= 80){
        mahasiswa[i]["grade"][0][key] = 'B'
      }
      else if(mahasiswa[i]["nilai"][0][key] >=70)
      {
        mahasiswa[i]["grade"][0][key] = 'C'
      }
      // console.log(mahasiswa[i]["nilai"][0][key])
    }
    console.log('\n')
    console.log(`Mahasiswa ${i+1} :
    Nama    : ${mahasiswa[i]["nama"]}
    Umur    : ${mahasiswa[i]["umur"]}
    Prodi   : ${mahasiswa[i]["prodi"]}
    Semester: ${mahasiswa[i]["semester"]}
    Grade   
    Algoritma : ${mahasiswa[i]["grade"][0]["algoritma"]}
    Testing : ${mahasiswa[i]["grade"][0]["testing"]}
    Pemrograman : ${mahasiswa[i]["grade"][0]["pemrograman"]}
    `)
    
    i++
}
