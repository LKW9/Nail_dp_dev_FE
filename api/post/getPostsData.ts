import { PostsData } from '../../types/dataType';

const tempData: PostsData = {
    success: true,
    code: 200,
    data: [
    {
      postId: 1,
      photoId: 1,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/448060288_1218896819271903_1308071018192291608_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=a1Nx9KTD68kQ7kNvgHMDBi-&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM4NTY5NjY0MzU3OTUyNDk5Mg%3D%3D.2-ccb7-5&oh=00_AYDckyDCdGefnHDAKdYnPw9okI2tkqyJdJ9SPFz8joq8xw&oe=667069AE&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 2,
      photoId: 2,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/443498922_820497346649537_3608241356218173798_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=kbQpcPe-lCMQ7kNvgEv1wCd&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2NzU5ODE2NjAwODI4MDM5Ng%3D%3D.2-ccb7-5&oh=00_AYAzMuYaePc6mgxDWMr2oCUr3yDnYvIRzkoGtoa6oXZBKw&oe=667052ED&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 3,
      photoId: 3,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/441654900_853722643419323_1185581097549886544_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=StNJB6E1iGwQ7kNvgEdwvkf&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2MjAzNTI2MTMwMjgxMzkwOA%3D%3D.2-ccb7-5&oh=00_AYBLfzDLIyzqCrSwpBlCOmR8tUjlnzwbosbWKvymaichWA&oe=66723AF5&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/441510249_926638285912497_8302222357780666665_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tBm7LkVIJHUQ7kNvgGaIzM6&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2MjAzNTI2MTI5NDQ0NDkxNg%3D%3D.2-ccb7-5&oh=00_AYBbvjGzjRk73EaD9VgwwX83fATIXswQQfbsDAt7sY0CFg&oe=66726300&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 4,
      photoId: 4,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439928143_801381311424998_7110117957853623939_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=JDjnxOa3j4YQ7kNvgFpJdWV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODQyMjE4NQ%3D%3D.2-ccb7-5&oh=00_AYCLiNTOeFSUbpRuDiYXzIBvW2MGGrldzTbO1XaLM9sMqw&oe=66724BA4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 5,
      photoId: 5,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439928143_801381311424998_7110117957853623939_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=JDjnxOa3j4YQ7kNvgFpJdWV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODQyMjE4NQ%3D%3D.2-ccb7-5&oh=00_AYCLiNTOeFSUbpRuDiYXzIBvW2MGGrldzTbO1XaLM9sMqw&oe=66724BA4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 6,
      photoId: 6,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/438189901_1489642891620611_4806688343094396042_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=e60QYM2TqXwQ7kNvgEaJmdZ&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0NTE3NTg5NDA4NTg0OTc4MQ%3D%3D.2-ccb7-5&oh=00_AYB-HpOxVbxFrdl6EzYl0fhwOhtukImk9XwtK3TCf7ZGVg&oe=66706263&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 7,
      photoId: 7,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/437695422_434322872522516_7192999328740503725_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3gsF9l4sMgsQ7kNvgFGjXhj&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0NDU4OTU0ODQwNzAyNDIwNg%3D%3D.2-ccb7-5&oh=00_AYDeDqxiHmfCWLZWFUOO0SslqudL8a_7VoQUB5GgZwP4XQ&oe=6670620E&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 8,
      photoId: 8,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/437741534_7425807867466886_705111353621251410_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4BSv7KZu9fIQ7kNvgGromxl&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MzczMTI2Nzc0MjgwNjIwMg%3D%3D.2-ccb7-5&oh=00_AYCA6X_u3KBaXw3_3qlCCVztAOyo4HPs6_AzuCxQiZR6UA&oe=66724983&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/437485105_1642247016310523_2705504963414272956_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ro5jzCsvn6QQ7kNvgHS8UfW&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MzczMTI2Nzc5MzA5MzQ1MQ%3D%3D.2-ccb7-5&oh=00_AYC5C5_-zoZsW8bX119bBjcsqbQzb9V3c00sGbliR5UKKg&oe=667259EB&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 9,
      photoId: 9,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/436278215_1375582973169611_8242886371393109643_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2godCPKyszoQ7kNvgEARh0C&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MTA0MTk5MTU0NjUwNTExOA%3D%3D.2-ccb7-5&oh=00_AYAnEcjDMaKOsHQ-SHUn1P4X90VY3Z6LeEDyEbgZcfZkJw&oe=6672476B&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/436312235_390088523791682_7900462599873311798_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=dkly_tDobzYQ7kNvgH0eV2n&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MTA0MTk5MTU0NjM3NDg2OA%3D%3D.2-ccb7-5&oh=00_AYBLm8_qqZLAaBSrtQKFS0SAgEqwXQsBAzNobCO11-s_dQ&oe=66725A70&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 10,
      photoId: 10,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433098599_328238150249553_8331931853809959013_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDk4eDEwOTcuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=nRvJqoU7-UcQ7kNvgGgHGuA&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzk1MTAzODYwNDAzMDM2NA%3D%3D.2-ccb7-5&oh=00_AYBs1mAoGN_iuCQ-QnR_ox0BEwZUdQz5DH6a6gnsQjgTFQ&oe=667060E4&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 11,
      photoId: 11,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/433239335_370520929145360_3183298166890636016_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=HAgi1oAkvUAQ7kNvgHkF5av&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzI3NDg0MTYwOTc0MjA4Mg%3D%3D.2-ccb7-5&oh=00_AYDJuuGAFrdxy40lwBxPsRyQajKry7_UwPzk5w82oNxp7g&oe=66725A2D&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/432507553_1343286583002629_8347195375448498819_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=eB-X13dHaPAQ7kNvgEq5aZ-&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzI3NDg0MTYwOTgwNzE1OQ%3D%3D.2-ccb7-5&oh=00_AYBuJR7fK8diZttSPuJKKt4LWwvuuLvoZpuXfA_2FLTkFg&oe=66723F76&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 12,
      photoId: 12,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433036705_781265136810203_4513918546549647091_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=pdA6KbOdk5YQ7kNvgE2F7OB&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMTk4NjY3OTA2OA%3D%3D.2-ccb7-5&oh=00_AYBos50x-J2Hhr8xnYycsqEjardlDkxiA8O5lmXqumrFjw&oe=66725977&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433127592_242546025518577_3338702165384421200_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=wf7xV2em_KgQ7kNvgFVM2g7&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMjAxMTc4MDg5Mg%3D%3D.2-ccb7-5&oh=00_AYAIYKE8fb1NG7bBqurZHx0hHGg7hK1IJquxzw67hOwqhw&oe=66723592&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433127592_242546025518577_3338702165384421200_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=wf7xV2em_KgQ7kNvgFVM2g7&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMjAxMTc4MDg5Mg%3D%3D.2-ccb7-5&oh=00_AYAIYKE8fb1NG7bBqurZHx0hHGg7hK1IJquxzw67hOwqhw&oe=66723592&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 13,
      photoId: 13,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/391472073_1039086003951056_676133294830676930_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tddBPazdH0sQ7kNvgGRIADT&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDI5NDQwNTUwOA%3D%3D.2-ccb7-5&oh=00_AYAJXjU0DSrl0wExuIbb9eCm2mHfWZWTmznWejHFW2zUKg&oe=66723CD3&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/358343991_304974608917918_7131381065966266953_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1ODOX0nWIsQ7kNvgGqtTxY&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDE3Njk0NTMyNg%3D%3D.2-ccb7-5&oh=00_AYCH2K4hAiEdHjCNEUOYhVp77GPBfjI52PVc_dZXyt6pAA&oe=66723684&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/358343991_304974608917918_7131381065966266953_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1ODOX0nWIsQ7kNvgGqtTxY&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDE3Njk0NTMyNg%3D%3D.2-ccb7-5&oh=00_AYCH2K4hAiEdHjCNEUOYhVp77GPBfjI52PVc_dZXyt6pAA&oe=66723684&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 14,
      photoId: 14,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/392951823_1348987079388404_6566810061704622055_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tcwPtedDZf4Q7kNvgHqZRKV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDUzOTQxNjk5OTQ2ODcyOA%3D%3D.2-ccb7-5&oh=00_AYCeN9VHZHjTDG5DODPMgDHH4JSazXqYR4u18-VvQ3b_xw&oe=667264E4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/392935432_873527024394589_686747510086981162_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=jJH5-ZlAag0Q7kNvgEjz-Ko&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDUzOTQxNzE2NzIxMjU3NQ%3D%3D.2-ccb7-5&oh=00_AYDnkQyBW0FtCZq0hLwBQK4ELrRxc8_FcjzlDcZpylczjg&oe=66726CAD&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 15,
      photoId: 15,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/387748807_842052050901755_9020718292599398426_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Y5va-ZbjaqYQ7kNvgHQlkQc&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM3ODc1MTc2Mw%3D%3D.2-ccb7-5&oh=00_AYDFI5e6ZsX5ll6EGLEaPhgnDmEfCwp0QElcchERLV2WxA&oe=667263AC&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 16,
      photoId: 16,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391132198_1059733432132147_4630326648098672942_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-qzALyRYdssQ7kNvgF2O0Nx&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjQxNDE5NjI0NzIyOTQ0NQ%3D%3D.2-ccb7-5&oh=00_AYBVPYVKHZszS58kJ7BBAPu8wONlGBZvnfLhCoCLVX6SLQ&oe=667247F6&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/390909106_1358442191446746_5193988077708408472_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6prJ2TUHR5UQ7kNvgGL3Ilf&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjQxNDE5NjQxNTA5MjQ0NQ%3D%3D.2-ccb7-5&oh=00_AYC7_w4IIO6txOAxPCfNfIjImG7SWsa2Vjg0m7VMijuhbA&oe=66725F3B&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 17,
      photoId: 17,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/384427478_696329395885987_8264361867790575477_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qdlTd8iiSN4Q7kNvgFMQB0v&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIwMTgzOTUzMDYwODkxMTI5MA%3D%3D.2-ccb7-5&oh=00_AYCiMWPOfOxh2ZZybZEdahKPRmVUO2ctEfal3P3vuUzA2w&oe=66723DF4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/384500173_708539221135638_6882552261726025121_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=JwFoi-_4zZoQ7kNvgF9y_Rs&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIwMTgzOTUzMDQwNzYwMzIxNg%3D%3D.2-ccb7-5&oh=00_AYAECey8KHRu90aUJk4PmZbIzeMv8x6Gdgjt9ZCkUmjx6g&oe=66725450&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 18,
      photoId: 18,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/366028348_820289976162392_342290848402831471_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=9_vlvJMTpMkQ7kNvgGNTNR0&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzE2NjI0MDUxODgxMjA4OTA4OA%3D%3D.2-ccb7-5&oh=00_AYDWTXFoIVbT1gbdWjdYjbpohzqgrUuSoe9ogI3iNEc8Yw&oe=6670457B&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 19,
      photoId: 19,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/341180054_2942607559204942_7475715522520802770_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=DrknQOV0B_gQ7kNvgGc52R1&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA4MjY1OTkyMDM3NDMxNTk4OA%3D%3D.2-ccb7-5&oh=00_AYDUPZAAIHDaQKkiJr3A_0UZGC9pZLlS57oH3YLjwBeNJw&oe=6670629F&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 20,
      photoId: 20,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/332487720_519596447021917_1289724096935743411_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=T5KCc3hOo3AQ7kNvgFaXOs4&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA1MjEyNzM0MDE1NTcxMzkzOQ%3D%3D.2-ccb7-5&oh=00_AYAgOC9M_qkN9q6tmEdQ4PCnQ8bjbVqao9fPkRFHGkXcig&oe=6672386C&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/332352385_5907640062657229_4580803043929812073_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=o_gbMdg4SnQQ7kNvgEJcDhR&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA1MjEyNzMzOTkzNzcyMzk5OQ%3D%3D.2-ccb7-5&oh=00_AYDdrtAQHwLcbMVosp7T3v3v-6KSKHe-0HnQv5qGC1UMJA&oe=66726BAF&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 1,
      photoId: 1,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/448060288_1218896819271903_1308071018192291608_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=a1Nx9KTD68kQ7kNvgHMDBi-&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM4NTY5NjY0MzU3OTUyNDk5Mg%3D%3D.2-ccb7-5&oh=00_AYDckyDCdGefnHDAKdYnPw9okI2tkqyJdJ9SPFz8joq8xw&oe=667069AE&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 2,
      photoId: 2,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/443498922_820497346649537_3608241356218173798_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=kbQpcPe-lCMQ7kNvgEv1wCd&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2NzU5ODE2NjAwODI4MDM5Ng%3D%3D.2-ccb7-5&oh=00_AYAzMuYaePc6mgxDWMr2oCUr3yDnYvIRzkoGtoa6oXZBKw&oe=667052ED&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 3,
      photoId: 3,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/441654900_853722643419323_1185581097549886544_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=StNJB6E1iGwQ7kNvgEdwvkf&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2MjAzNTI2MTMwMjgxMzkwOA%3D%3D.2-ccb7-5&oh=00_AYBLfzDLIyzqCrSwpBlCOmR8tUjlnzwbosbWKvymaichWA&oe=66723AF5&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/441510249_926638285912497_8302222357780666665_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tBm7LkVIJHUQ7kNvgGaIzM6&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM2MjAzNTI2MTI5NDQ0NDkxNg%3D%3D.2-ccb7-5&oh=00_AYBbvjGzjRk73EaD9VgwwX83fATIXswQQfbsDAt7sY0CFg&oe=66726300&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 4,
      photoId: 4,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439928143_801381311424998_7110117957853623939_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=JDjnxOa3j4YQ7kNvgFpJdWV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODQyMjE4NQ%3D%3D.2-ccb7-5&oh=00_AYCLiNTOeFSUbpRuDiYXzIBvW2MGGrldzTbO1XaLM9sMqw&oe=66724BA4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 5,
      photoId: 5,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439928143_801381311424998_7110117957853623939_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=JDjnxOa3j4YQ7kNvgFpJdWV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODQyMjE4NQ%3D%3D.2-ccb7-5&oh=00_AYCLiNTOeFSUbpRuDiYXzIBvW2MGGrldzTbO1XaLM9sMqw&oe=66724BA4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/439287886_1092128548510814_1296746550347582185_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qJQ3zlUtCYQ7kNvgFLNNoo&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM1MDQxOTg2NTM3ODI5NjM0Nw%3D%3D.2-ccb7-5&oh=00_AYCDppiNRpktzweqI5cd2lmK67kSNe5QMW6BDD7-bPBvug&oe=6672545A&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 6,
      photoId: 6,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/438189901_1489642891620611_4806688343094396042_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=e60QYM2TqXwQ7kNvgEaJmdZ&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0NTE3NTg5NDA4NTg0OTc4MQ%3D%3D.2-ccb7-5&oh=00_AYB-HpOxVbxFrdl6EzYl0fhwOhtukImk9XwtK3TCf7ZGVg&oe=66706263&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 7,
      photoId: 7,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/437695422_434322872522516_7192999328740503725_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3gsF9l4sMgsQ7kNvgFGjXhj&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0NDU4OTU0ODQwNzAyNDIwNg%3D%3D.2-ccb7-5&oh=00_AYDeDqxiHmfCWLZWFUOO0SslqudL8a_7VoQUB5GgZwP4XQ&oe=6670620E&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 8,
      photoId: 8,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/437741534_7425807867466886_705111353621251410_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4BSv7KZu9fIQ7kNvgGromxl&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MzczMTI2Nzc0MjgwNjIwMg%3D%3D.2-ccb7-5&oh=00_AYCA6X_u3KBaXw3_3qlCCVztAOyo4HPs6_AzuCxQiZR6UA&oe=66724983&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/437485105_1642247016310523_2705504963414272956_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ro5jzCsvn6QQ7kNvgHS8UfW&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MzczMTI2Nzc5MzA5MzQ1MQ%3D%3D.2-ccb7-5&oh=00_AYC5C5_-zoZsW8bX119bBjcsqbQzb9V3c00sGbliR5UKKg&oe=667259EB&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 9,
      photoId: 9,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/436278215_1375582973169611_8242886371393109643_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2godCPKyszoQ7kNvgEARh0C&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MTA0MTk5MTU0NjUwNTExOA%3D%3D.2-ccb7-5&oh=00_AYAnEcjDMaKOsHQ-SHUn1P4X90VY3Z6LeEDyEbgZcfZkJw&oe=6672476B&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/436312235_390088523791682_7900462599873311798_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=dkly_tDobzYQ7kNvgH0eV2n&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzM0MTA0MTk5MTU0NjM3NDg2OA%3D%3D.2-ccb7-5&oh=00_AYBLm8_qqZLAaBSrtQKFS0SAgEqwXQsBAzNobCO11-s_dQ&oe=66725A70&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 10,
      photoId: 10,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433098599_328238150249553_8331931853809959013_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDk4eDEwOTcuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=nRvJqoU7-UcQ7kNvgGgHGuA&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzk1MTAzODYwNDAzMDM2NA%3D%3D.2-ccb7-5&oh=00_AYBs1mAoGN_iuCQ-QnR_ox0BEwZUdQz5DH6a6gnsQjgTFQ&oe=667060E4&_nc_sid=cf751b',
      like: true,
      saved: false,
    },
    {
      postId: 11,
      photoId: 11,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/433239335_370520929145360_3183298166890636016_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=HAgi1oAkvUAQ7kNvgHkF5av&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzI3NDg0MTYwOTc0MjA4Mg%3D%3D.2-ccb7-5&oh=00_AYDJuuGAFrdxy40lwBxPsRyQajKry7_UwPzk5w82oNxp7g&oe=66725A2D&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/432507553_1343286583002629_8347195375448498819_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=eB-X13dHaPAQ7kNvgEq5aZ-&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMzI3NDg0MTYwOTgwNzE1OQ%3D%3D.2-ccb7-5&oh=00_AYBuJR7fK8diZttSPuJKKt4LWwvuuLvoZpuXfA_2FLTkFg&oe=66723F76&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 12,
      photoId: 12,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433036705_781265136810203_4513918546549647091_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=pdA6KbOdk5YQ7kNvgE2F7OB&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMTk4NjY3OTA2OA%3D%3D.2-ccb7-5&oh=00_AYBos50x-J2Hhr8xnYycsqEjardlDkxiA8O5lmXqumrFjw&oe=66725977&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433127592_242546025518577_3338702165384421200_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=wf7xV2em_KgQ7kNvgFVM2g7&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMjAxMTc4MDg5Mg%3D%3D.2-ccb7-5&oh=00_AYAIYKE8fb1NG7bBqurZHx0hHGg7hK1IJquxzw67hOwqhw&oe=66723592&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/433127592_242546025518577_3338702165384421200_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=wf7xV2em_KgQ7kNvgFVM2g7&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzMyMjcyNDEzMjAxMTc4MDg5Mg%3D%3D.2-ccb7-5&oh=00_AYAIYKE8fb1NG7bBqurZHx0hHGg7hK1IJquxzw67hOwqhw&oe=66723592&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 13,
      photoId: 13,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/391472073_1039086003951056_676133294830676930_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tddBPazdH0sQ7kNvgGRIADT&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDI5NDQwNTUwOA%3D%3D.2-ccb7-5&oh=00_AYAJXjU0DSrl0wExuIbb9eCm2mHfWZWTmznWejHFW2zUKg&oe=66723CD3&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/358343991_304974608917918_7131381065966266953_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1ODOX0nWIsQ7kNvgGqtTxY&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDE3Njk0NTMyNg%3D%3D.2-ccb7-5&oh=00_AYCH2K4hAiEdHjCNEUOYhVp77GPBfjI52PVc_dZXyt6pAA&oe=66723684&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/358343991_304974608917918_7131381065966266953_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1ODOX0nWIsQ7kNvgGqtTxY&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDc5NTMyMDE3Njk0NTMyNg%3D%3D.2-ccb7-5&oh=00_AYCH2K4hAiEdHjCNEUOYhVp77GPBfjI52PVc_dZXyt6pAA&oe=66723684&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 14,
      photoId: 14,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/392951823_1348987079388404_6566810061704622055_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tcwPtedDZf4Q7kNvgHqZRKV&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDUzOTQxNjk5OTQ2ODcyOA%3D%3D.2-ccb7-5&oh=00_AYCeN9VHZHjTDG5DODPMgDHH4JSazXqYR4u18-VvQ3b_xw&oe=667264E4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/392935432_873527024394589_686747510086981162_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=jJH5-ZlAag0Q7kNvgEjz-Ko&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxNDUzOTQxNzE2NzIxMjU3NQ%3D%3D.2-ccb7-5&oh=00_AYDnkQyBW0FtCZq0hLwBQK4ELrRxc8_FcjzlDcZpylczjg&oe=66726CAD&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 15,
      photoId: 15,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/387748807_842052050901755_9020718292599398426_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Y5va-ZbjaqYQ7kNvgHQlkQc&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM3ODc1MTc2Mw%3D%3D.2-ccb7-5&oh=00_AYDFI5e6ZsX5ll6EGLEaPhgnDmEfCwp0QElcchERLV2WxA&oe=667263AC&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391254428_286388360993933_7773590804247516505_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDEuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qI_60vTC6ZQQ7kNvgF0n6NE&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjU1ODQ1NzM2MjE3OTIwOA%3D%3D.2-ccb7-5&oh=00_AYD0f5SdTjGIVmtC0nWuK2mUqMhYr-kr16Mec-jqU4Sf_Q&oe=66725CC8&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 16,
      photoId: 16,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/391132198_1059733432132147_4630326648098672942_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-qzALyRYdssQ7kNvgF2O0Nx&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjQxNDE5NjI0NzIyOTQ0NQ%3D%3D.2-ccb7-5&oh=00_AYBVPYVKHZszS58kJ7BBAPu8wONlGBZvnfLhCoCLVX6SLQ&oe=667247F6&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/390909106_1358442191446746_5193988077708408472_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6prJ2TUHR5UQ7kNvgGL3Ilf&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIxMjQxNDE5NjQxNTA5MjQ0NQ%3D%3D.2-ccb7-5&oh=00_AYC7_w4IIO6txOAxPCfNfIjImG7SWsa2Vjg0m7VMijuhbA&oe=66725F3B&_nc_sid=cf751b',
      like: false,
      saved: true,
    },
    {
      postId: 17,
      photoId: 17,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/384427478_696329395885987_8264361867790575477_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qdlTd8iiSN4Q7kNvgFMQB0v&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIwMTgzOTUzMDYwODkxMTI5MA%3D%3D.2-ccb7-5&oh=00_AYCiMWPOfOxh2ZZybZEdahKPRmVUO2ctEfal3P3vuUzA2w&oe=66723DF4&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/384500173_708539221135638_6882552261726025121_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=JwFoi-_4zZoQ7kNvgF9y_Rs&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzIwMTgzOTUzMDQwNzYwMzIxNg%3D%3D.2-ccb7-5&oh=00_AYAECey8KHRu90aUJk4PmZbIzeMv8x6Gdgjt9ZCkUmjx6g&oe=66725450&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 18,
      photoId: 18,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/366028348_820289976162392_342290848402831471_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=9_vlvJMTpMkQ7kNvgGNTNR0&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzE2NjI0MDUxODgxMjA4OTA4OA%3D%3D.2-ccb7-5&oh=00_AYDWTXFoIVbT1gbdWjdYjbpohzqgrUuSoe9ogI3iNEc8Yw&oe=6670457B&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 19,
      photoId: 19,
      photo_url:
        'https://instagram.ficn3-4.fna.fbcdn.net/v/t51.29350-15/341180054_2942607559204942_7475715522520802770_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=DrknQOV0B_gQ7kNvgGc52R1&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA4MjY1OTkyMDM3NDMxNTk4OA%3D%3D.2-ccb7-5&oh=00_AYDUPZAAIHDaQKkiJr3A_0UZGC9pZLlS57oH3YLjwBeNJw&oe=6670629F&_nc_sid=cf751b',
      like: false,
      saved: false,
    },
    {
      postId: 20,
      photoId: 20,
      photo_url:
        'https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/332487720_519596447021917_1289724096935743411_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=T5KCc3hOo3AQ7kNvgFaXOs4&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA1MjEyNzM0MDE1NTcxMzkzOQ%3D%3D.2-ccb7-5&oh=00_AYAgOC9M_qkN9q6tmEdQ4PCnQ8bjbVqao9fPkRFHGkXcig&oe=6672386C&_nc_sid=cf751b https://instagram.ficn3-3.fna.fbcdn.net/v/t51.29350-15/332352385_5907640062657229_4580803043929812073_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=o_gbMdg4SnQQ7kNvgEJcDhR&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MzA1MjEyNzMzOTkzNzcyMzk5OQ%3D%3D.2-ccb7-5&oh=00_AYDdrtAQHwLcbMVosp7T3v3v-6KSKHe-0HnQv5qGC1UMJA&oe=66726BAF&_nc_sid=cf751b',
      like: false,
      saved: false,
    }
    ]
}

export const getPostsData = async () => {

  // await
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/getPostsData`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: 'include',
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Success:', data);
  //     localStorage.setItem('signupData', JSON.stringify(data));
  //   })

  return tempData;
};