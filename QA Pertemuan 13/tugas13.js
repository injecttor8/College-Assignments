let mahasiswa = [
    {
        'nama':'reza',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7
    },
    {
        'nama':'fathur',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7
        
    },
    {
        'nama':'gagan',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7
        
    },
    {
        'nama':'angga',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7
        
    },
    {
        'nama':'aang',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7
        
    },
    {
        'nama':'aip',
        'umur':21,
        'prodi':'Teknik Informatika',
        'semester':7
        
    },
    {
        'nama':'wisnu',
        'umur':22,
        'prodi':'Teknik Informatika',
        'semester':7
    }]
    
let i=0
while (i < mahasiswa.length){
    console.log(`Mahasiswa ${i+1} :
    Nama    : ${mahasiswa[i]["nama"]}
    Umur    : ${mahasiswa[i]["umur"]}
    Prodi   : ${mahasiswa[i]["prodi"]}
    Semester: ${mahasiswa[i]["semester"]}
    `)
    
    i++
}