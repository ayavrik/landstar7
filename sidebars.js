module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Установка ПО',
      items: ['doc1'],
    },
    {
      type: 'category',
      label: 'Основной интерфейс',
      items: [
        'doc1',
      {
        'Описание функций': ['mdx',{'Пример':['doc2'],},],
      },
    ],
    },
    {
      type: 'category',
      label: 'Проект',
      items: [
        'проект/управление-проектами',
        'проект/системы-координат',
        'проект/база-данных-точек',
      
      ],
    },
    {
      type: 'category',
      label: 'Работа',
      items: ['doc2'],
    },
    {
      type: 'category',
      label: 'Настройки',
      items: ['doc3'],
    },
    {
      type: 'category',
      label: 'Задачи',
      items: ['mdx'],
    },
  ],

};