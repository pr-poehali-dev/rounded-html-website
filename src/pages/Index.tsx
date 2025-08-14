import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const forumSections = [
    {
      title: "Отзывы",
      description: "Отзывы пользователей о работе форума",
      posts: 147,
      lastPost: "2 минуты назад",
      icon: "MessageSquare",
      color: "bg-blue-500"
    },
    {
      title: "Работы",
      description: "Портфолио и работы участников",
      posts: 89,
      lastPost: "15 минут назад", 
      icon: "Briefcase",
      color: "bg-green-500"
    },
    {
      title: "Заявления на сотрудника",
      description: "Подача заявок на вакантные должности",
      posts: 23,
      lastPost: "1 час назад",
      icon: "UserPlus",
      color: "bg-purple-500"
    },
    {
      title: "Правила",
      description: "Правила форума и рекомендации",
      posts: 12,
      lastPost: "3 дня назад",
      icon: "BookOpen",
      color: "bg-orange-500"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Отличный форум, всем рекомендую!",
      author: "Александр К.",
      avatar: "AK",
      time: "2 мин назад",
      replies: 5,
      rating: 4.8,
      isOnline: true,
      category: "Отзывы"
    },
    {
      id: 2,
      title: "Моё новое портфолио веб-дизайнера",
      author: "Мария В.",
      avatar: "МВ",
      time: "15 мин назад",
      replies: 12,
      rating: 4.9,
      isOnline: true,
      category: "Работы"
    },
    {
      id: 3,
      title: "Заявление на позицию модератора",
      author: "Дмитрий С.",
      avatar: "ДС", 
      time: "1 час назад",
      replies: 3,
      rating: 4.5,
      isOnline: false,
      category: "Заявления"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="forum-gradient text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">XENFORO FORUM</h1>
              <Badge className="bg-white/20 text-white">Онлайн: 247</Badge>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">Форумы</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">Участники</Button>
            <div className="flex-1 max-w-md ml-6">
              <div className="relative">
                <Input 
                  placeholder="Поиск по форуму..." 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button size="sm" className="absolute right-1 top-1 bg-white text-blue-600">
                  <Icon name="Search" size={16} />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Forum Sections */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Разделы форума</h2>
            <div className="grid gap-4">
              {forumSections.map((section, index) => (
                <Card key={index} className="forum-card p-6 hover-scale cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center`}>
                      <Icon name={section.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{section.posts} постов</span>
                        <span>•</span>
                        <span>Последний: {section.lastPost}</span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts Sidebar */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Последние посты</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="forum-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center font-medium">
                        {post.avatar}
                      </Avatar>
                      {post.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 truncate">{post.title}</h4>
                      <p className="text-sm text-gray-600">by {post.author}</p>
                      <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                        <span>{post.time}</span>
                        <span className="flex items-center">
                          <Icon name="MessageCircle" size={12} className="mr-1" />
                          {post.replies}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Star" size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                          {post.rating}
                        </span>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Online Users */}
            <Card className="forum-card p-4 mt-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Icon name="Users" size={16} className="mr-2" />
                Сейчас на форуме
              </h3>
              <div className="space-y-2">
                {['Админ', 'Модератор', 'VIP пользователь'].map((role, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{role}</span>
                    <Badge variant="outline" className="text-xs ml-auto">
                      {Math.floor(Math.random() * 20) + 5}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Forum Stats */}
            <Card className="forum-card p-4 mt-4">
              <h3 className="font-semibold text-gray-800 mb-3">Статистика</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-xs text-gray-500">Постов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">89</div>
                  <div className="text-xs text-gray-500">Участников</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;