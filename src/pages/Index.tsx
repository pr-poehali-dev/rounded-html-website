import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const forumSections = [
    {
      title: "Отзывы",
      description: "Отзывы пользователей о работе форума",
      posts: 147,
      lastPost: "2 минуты назад",
      icon: "MessageSquare",
      color: "bg-blue-600"
    },
    {
      title: "Работы",
      description: "Портфолио и работы участников",
      posts: 89,
      lastPost: "15 минут назад", 
      icon: "Briefcase",
      color: "bg-green-600"
    },
    {
      title: "Заявления на сотрудника",
      description: "Подача заявок на вакантные должности",
      posts: 23,
      lastPost: "1 час назад",
      icon: "UserPlus",
      color: "bg-purple-600"
    },
    {
      title: "Правила",
      description: "Правила форума и рекомендации",
      posts: 12,
      lastPost: "3 дня назад",
      icon: "BookOpen",
      color: "bg-orange-600"
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

  const userRoles = [
    { id: 1, name: "Администратор", users: 2, color: "bg-red-600", permissions: ["Все права"] },
    { id: 2, name: "Модератор", users: 5, color: "bg-yellow-600", permissions: ["Управление постами", "Бан пользователей"] },
    { id: 3, name: "VIP", users: 23, color: "bg-purple-600", permissions: ["Особые функции", "Приоритетная поддержка"] },
    { id: 4, name: "Пользователь", users: 159, color: "bg-blue-600", permissions: ["Базовые права"] }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="forum-gradient py-6 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">XENFORO FORUM</h1>
              <Badge className="bg-white/20 text-white border-white/30">Онлайн: 247</Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-600"
              >
                <Icon name="Settings" size={16} className="mr-2" />
                Админ
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">Форумы</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">Участники</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Новая тема
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-800 border-slate-700 text-slate-100">
                <DialogHeader>
                  <DialogTitle className="text-slate-100">Создать новую тему</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Заголовок темы..." 
                      value={newTopicTitle}
                      onChange={(e) => setNewTopicTitle(e.target.value)}
                      className="dark-input"
                    />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="dark-input">
                        <SelectValue placeholder="Выберите раздел" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="reviews">Отзывы</SelectItem>
                        <SelectItem value="works">Работы</SelectItem>
                        <SelectItem value="applications">Заявления</SelectItem>
                        <SelectItem value="rules">Правила</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Содержание сообщения..." 
                      value={newTopicContent}
                      onChange={(e) => setNewTopicContent(e.target.value)}
                      className="dark-input min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Создать тему
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex-1 max-w-md ml-6">
              <div className="relative">
                <Input 
                  placeholder="Поиск по форуму..." 
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Search" size={16} />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${showAdminPanel ? 'mr-80' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Forum Sections */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">Разделы форума</h2>
            <div className="grid gap-4">
              {forumSections.map((section, index) => (
                <Card key={index} className="forum-card p-6 hover-scale cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center`}>
                      <Icon name={section.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-100">{section.title}</h3>
                      <p className="text-slate-400 mt-1">{section.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                        <span>{section.posts} постов</span>
                        <span>•</span>
                        <span>Последний: {section.lastPost}</span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-slate-400" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts Sidebar */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">Последние посты</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="forum-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center font-medium">
                        {post.avatar}
                      </Avatar>
                      {post.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-100 truncate">{post.title}</h4>
                      <p className="text-sm text-slate-400">by {post.author}</p>
                      <div className="flex items-center space-x-3 mt-2 text-xs text-slate-500">
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
                      <Badge variant="outline" className="mt-2 text-xs border-slate-600 text-slate-300">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Online Users */}
            <Card className="forum-card p-4 mt-6">
              <h3 className="font-semibold text-slate-100 mb-3 flex items-center">
                <Icon name="Users" size={16} className="mr-2" />
                Сейчас на форуме
              </h3>
              <div className="space-y-2">
                {userRoles.slice(0, 3).map((role, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-300">{role.name}</span>
                    <Badge variant="outline" className="text-xs ml-auto border-slate-600 text-slate-400">
                      {role.users}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Forum Stats */}
            <Card className="forum-card p-4 mt-4">
              <h3 className="font-semibold text-slate-100 mb-3">Статистика</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">1,247</div>
                  <div className="text-xs text-slate-500">Постов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">189</div>
                  <div className="text-xs text-slate-500">Участников</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Admin Panel */}
        {showAdminPanel && (
          <div className="fixed right-0 top-0 w-80 admin-panel p-6 z-40 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-100">Админ-панель</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowAdminPanel(false)}
                className="text-slate-400 hover:text-slate-100"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>

            <Tabs defaultValue="roles" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                <TabsTrigger value="roles" className="data-[state=active]:bg-slate-700 text-slate-300">Роли</TabsTrigger>
                <TabsTrigger value="moderation" className="data-[state=active]:bg-slate-700 text-slate-300">Модерация</TabsTrigger>
              </TabsList>

              <TabsContent value="roles" className="mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-200">Управление ролями</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Icon name="Plus" size={14} className="mr-1" />
                        Новая роль
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-slate-700 text-slate-100">
                      <DialogHeader>
                        <DialogTitle className="text-slate-100">Создать роль</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input placeholder="Название роли" className="dark-input" />
                        <Select>
                          <SelectTrigger className="dark-input">
                            <SelectValue placeholder="Выберите цвет" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="red">Красный</SelectItem>
                            <SelectItem value="blue">Синий</SelectItem>
                            <SelectItem value="green">Зеленый</SelectItem>
                            <SelectItem value="purple">Фиолетовый</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-200">Права доступа:</label>
                          <div className="space-y-2">
                            {["Управление постами", "Бан пользователей", "Модерация", "Админ права"].map((permission) => (
                              <label key={permission} className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded border-slate-600" />
                                <span className="text-sm text-slate-300">{permission}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Создать роль</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-3">
                  {userRoles.map((role) => (
                    <Card key={role.id} className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                          <h4 className="font-medium text-slate-200">{role.name}</h4>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {role.users}
                          </Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-slate-200">
                            <Icon name="Edit" size={14} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-400">
                            <Icon name="Trash" size={14} />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.map((permission, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="moderation" className="mt-4 space-y-4">
                <h3 className="text-lg font-semibold text-slate-200">Модерация</h3>
                
                <Card className="bg-slate-800 border-slate-700 p-4">
                  <h4 className="font-medium text-slate-200 mb-3">Ожидают модерации</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-slate-700 rounded">
                      <div>
                        <p className="text-sm text-slate-200">Новый пост от @user123</p>
                        <p className="text-xs text-slate-400">15 минут назад</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Icon name="Check" size={12} />
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Icon name="X" size={12} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-4">
                  <h4 className="font-medium text-slate-200 mb-3">Жалобы</h4>
                  <div className="text-sm text-slate-400">Нет новых жалоб</div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;