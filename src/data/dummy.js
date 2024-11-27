import AnThan from '../data/AnThan.mp3'
import Cua from '../data/Cua.mp3'
import HuongDuong from '../data/HuongDuong.mp3'
import LaLung from '../data/LaLung.mp3'
import TruocKhiEmTonTai from '../data/TruocKhiEmTonTai.mp3'

export const listMusic = [
    {
        id: 'tk0tl216p',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        name: 'Name 61',
        type: 'Playlist',
        author: 'Name 20',
        songs: [
            {
                idSong: 'song1'
            }
        ]
    },
    {
        id: 'tk0tl216p',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        name: 'marzuz',
        type: 'Artist',
        author: ''
    },
    {
        id: 'g7dzrwmxe',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        name: 'Vũ',
        type: 'Artist',
        author: ''
    },
    {
        id: '8lc1oi99r',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        name: 'Name 26',
        type: 'Playlist',
        author: 'Name 64',
        songs: [
            {
                idSong: 'song3'
            }
        ]
    },
    {
        id: 'imog2lf6w',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        name: 'Name 4',
        type: 'Album',
        author: 'Name 45',
        songs: [
            {
                idSong: 'song2'
            }
        ]
    }
];

export const type = [
    {
        name: 'Playlist'
    },
    {
        name: 'Artist'
    },
    {
        name: 'Albums'
    }
]

export const Artists = [
    {
        id: 'tk0tl216p',
        name: 'marzuz',
        follower: 46239,
        des: 'Born in 2000 in Hanoi, Trần My Anh was nurtured by a family of musical influences who greatly inspired her to develop her own sense of music. Started from uploading covers of her favorite songs on Youtube at the age of 9 to writing her own songs at around 12 in her tiny bedroom with just a guitar, she only ever dreamed of becoming a known singer-songwriter under the name of marzuz. She believes music is her only means of communication, as an introverted kid who could never confide in anyone. In 2016, marzuz uploaded her first original song “Mai,” - a soft acoustic song where she portrayed love and vulnerability - on Soundcloud, without expecting the song would be able to travel so far along the country. People started recognizing her as marzuz and was waiting for more of her music. During the course of 2016 to 2020, she started working with producers such as Onionn., Kewtiie,… and put out a few more songs that moved the audience such as “Fortune” - a sensual future-bass track, “Nếu” - an emotional flow diving into her deep view of the world and the reality of mental illness, “3 PHÚT” - a hip-hop RnB track where she spilled honest truth about her being a 17-year-old wanting to be apart of the harsh music and entertainment industry, “Và Thế Giới Đã Mất Đi Một Người Cô Đơn”… marzuz believes in the freedom of music as in wanting to experiment with many different genres of music, but never losing the very core of her art - it being true to her feelings and experiences.'
    },
    {
        id: 'g7dzrwmxe',
        name: 'Vũ',
        follower: 46284,
        des: "I'm Vu.<br> "

    },
    {
        id: 'khf3ziy9x',
        name: 'HIEUTHUHAI',
        follower: 1770132,
        des: 'ai cũng phải bắt đầu từ đâu đó'

    },
    {
        id: '8lc1oi99r',
        name: 'Low G',
        follower: 1490370,
        des: 'Low G is a rapper, songwriter and dancer. His real name is Nguyen Hoang Long. He was born in 1997 in Hanoi, Vietnam. First, he was a dancer from Last Fire Crew, a very popular dance crew in the Vietnamese hip-hop community. Then, he tried rapping for fun and released his songs on Youtube. One day, they became viral on the Internet, which made Low G become famous and start his career as a rapper. Now he is in two rap teams named “Rap Nhà Làm” and “ Nhà Hoá Học Đống Đa”; and he is the most renowned member.<br/>Low G is well- known for being flexible to many different genres from Pop to Hip - hop.He is also good at mixing US & UK rap style with Vietnamese culture, making it interesting to listeners.People love his unique vocal, smooth rap flows and creative lyricism.His bars are catchy, funny; his wordplays are unpredictable; and his beats are fresh to Vietnamese audience.All of these factors give him a unique personality in music and make his songs go viral.'

    },
    {
        id: 'imog2lf6w',
        name: 'Thắng',
        follower: 200000,
        des: 'Vũ Đinh Trọng Thắng: singer & songwriter Chiều Phan aka Big Phan'
    }
]

export const songs = [
    {
        id: 'song1',
        name: 'Hướng Dương',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        data: HuongDuong,
        listen: '523453',
        author: [
            {
                idAuthor: "tk0tl216p"
            }
        ]
    },
    {
        id: 'song2',
        name: 'Trước khi em tồn tại',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        data: TruocKhiEmTonTai,
        listen: '264362',
        author: [
            {
                idAuthor: "tk0tl216p"
            }
        ]
    },
    {
        id: 'song3',
        name: 'Lạ Lùng',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        data: LaLung,
        listen: '234754745',
        author: [
            {
                idAuthor: "tk0tl216p"
            }
        ]
    },
    {
        id: 'song4',
        name: 'An Thần',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        data: AnThan,
        listen: '754624624',
        author: [
            {
                idAuthor: "tk0tl216p"
            }
        ]
    },
    {
        id: 'song5',
        name: 'Cua',
        image: 'https://i1.sndcdn.com/avatars-000432809481-xn4prf-t240x240.jpg',
        data: Cua,
        listen: '4353246547',
        author: [
            {
                idAuthor: "g7dzrwmxe"
            }
        ]
    }
]