/* eslint-disable @next/next/no-img-element */
import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { LinkCardIcon } from '@/components/link-card-icon';
import { LinkCardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { FaServer, FaGamepad, FaCog, FaUsers, FaArrowLeft, FaDiscord, FaPeopleCarry, FaSitemap, FaPersonBooth, FaPeopleArrows, FaNode } from 'react-icons/fa';
import Link from 'next/link';

// サーバー情報の型定義
interface ServerInfo {
  id: string;
  name: string;
  description: string;
  url?: string;
  iconPath: string;
  category: 'minecraft' | 'discord' | 'web' | 'game' | "group" | 'other';
  status: 'active' | 'maintenance' | 'standby' | 'inactive';
  role: string; // 運営での役割
}

// サーバー一覧データ（実際のデータに置き換えてください）
const servers: ServerInfo[] = [
  {
    id: 'okakey',
    name: 'Okakey',
    description: 'なんやかんやしている団体のよてい',
    url: '',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'group',
    status: 'standby',
    role: '代表者'
  },
  {
    id: 'okasaba',
    name: 'おかさば',
    description: 'コミュニティDiscordサーバー',
    url: 'https://discord.gg/NEbh3x4sur',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'discord',
    status: 'active',
    role: 'サーバー管理者'
  },
  {
    id: 'okaka-denno',
    name: '††† おかかの電脳要塞 †††',
    description: 'Webページ',
    url: 'https://www.okaka.jp',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'web',
    status: 'active',
    role: '運営者'
  },
  {
    id: 'babel',
    name: 'Babel Server',
    description: 'Minecraft 採掘サーバー',
    url: 'https://discord.gg/Vscj3PSzKp',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: '技術部技術役・対応部執行役'
  },
  {
    id: 'illumina',
    name: 'IlluminaOrigin',
    description: 'Minecraft RPGサーバー',
    url: 'https://discord.gg/EvtQr2JC7S',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'standby',
    role: '技術部 副リーダー'
  },
  {
    id: 'karo',
    name: 'かろEarth',
    description: 'Minecraft 地球型建国サーバー',
    url: 'https://discord.gg/EJtfmR48xs',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'Admin'
  },
  {
    id: 'marv',
    name: 'MARV',
    description: 'Minecraft Java&BE版 で遊べる建国アースサーバー',
    url: 'https://discord.gg/vEjzunKRx5',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'Staff'
  },
  {
    id: 'hima',
    name: '暇人鯖',
    description: 'Discord雑談サーバー&Minecraftサーバー',
    url: 'https://discord.gg/xia-ren-qing-hima-957886649583415296',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'Minecraftサーバー管理者'
  },
  {
    id: 'hrkt',
    name: '語るんです！',
    description: 'Discord雑談サーバー&Minecraftサーバー',
    url: 'https://discord.gg/bdHJkkFXa3',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'Minecraftサーバー管理者・Discord管理者'
  },
  {
    id: 'kpw',
    name: 'かめぱわーるど',
    description: 'Discord雑談サーバー&Minecraftサーバー',
    url: 'https://discord.gg/kamepower',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'イベントスタッフ'
  },
  {
    id: 'skynet',
    name: 'Sky Network',
    description: 'Minecraftサーバー',
    url: 'https://discord.gg/TA3xusxWEb',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: 'スタッフ・ドメイン管理者・サイト開発陣'
  },
  {
    id: 'syosin',
    name: '初心サバイバル',
    description: 'Minecraftサーバー',
    url: 'https://discord.gg/8J8NgdagXS',
    iconPath: 'icon', // アイコンコンポーネントを使用
    category: 'game',
    status: 'active',
    role: '技術班'
  }
  
];

// カテゴリ別のアイコンとスタイル
const getCategoryStyle = (category: ServerInfo['category']) => {
  switch (category) {
    case 'minecraft':
      return {
        icon: <FaGamepad size={25} />,
        bgColor: 'bg-green-600',
        hoverColor: 'hover:border-green-500'
      };
    case 'discord':
      return {
        icon: <FaDiscord size={25} />,
        bgColor: 'bg-discord',
        hoverColor: 'hover:border-discord'
      };
    case 'web':
      return {
        icon: <FaSitemap size={25} />,
        bgColor: 'bg-blue-600',
        hoverColor: 'hover:border-blue-500'
      };
    case 'game':
      return {
        icon: <FaGamepad size={25} />,
        bgColor: 'bg-purple-600',
        hoverColor: 'hover:border-purple-500'
      };
    case 'group':
      return {
        icon: <FaPeopleArrows size={25} />,
        bgColor: 'bg-orange-600',
        hoverColor: 'hover:border-orange-500'
      };
    default:
      return {
        icon: <FaNode size={25} />,
        bgColor: 'bg-gray-600',
        hoverColor: 'hover:border-gray-500'
      };
  }
};

// ステータス表示
const getStatusStyle = (status: ServerInfo['status']) => {
  switch (status) {
    case 'active':
      return { color: 'text-green-500', text: '稼働中' };
    case 'maintenance':
      return { color: 'text-yellow-500', text: 'メンテナンス中' };
    case 'standby':
      return { color: 'text-gray-500', text: '準備中・開発中' };
    case 'inactive':
      return { color: 'text-red-500', text: '停止中' };
  }
};

export default function ServersPage() {
  return (
    <main className='container py-6 space-y-6 lg:my-10'>
      <FadeUpStagger>
        {/* ヘッダー */}
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-4'>
            <Link href="/" className='p-2 rounded-lg hover:bg-muted transition-colors'>
              <FaArrowLeft size={20} />
            </Link>
            <div>
              <h1 className='text-3xl lg:text-4xl font-black'>運営サーバー一覧</h1>
              <p className='text-muted-foreground text-lg'>自分が運営・管理に携わっているサーバーやサービス</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* サーバー一覧グリッド */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6'>
          {servers.map((server) => {
            const categoryStyle = getCategoryStyle(server.category);
            const statusStyle = getStatusStyle(server.status);
            
            const ServerCard = ({ children }: { children: React.ReactNode }) => (
              <div className='space-y-4'>
                {/* サーバーアイコン */}
                <div className='flex items-center justify-between'>
                  <LinkCardIcon className={categoryStyle.bgColor}>
                    {server.iconPath === 'icon' ? (
                      categoryStyle.icon
                    ) : (
                      <img 
                        src={server.iconPath} 
                        alt={`${server.name} icon`}
                        className='w-6 h-6 object-contain'
                      />
                    )}
                  </LinkCardIcon>
                  <div className={`text-sm font-medium ${statusStyle.color}`}>
                    {statusStyle.text}
                  </div>
                </div>
                
                {/* サーバー情報 */}
                <div className='space-y-2'>
                  <LinkCardName name={server.name} id={server.description} />
                  <div className='text-sm text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <span className='font-medium'>役割:</span>
                      <span>{server.role}</span>
                    </div>
                    <div className='flex items-center gap-2 mt-1'>
                      <span className='font-medium'>カテゴリ:</span>
                      <span className='capitalize'>{server.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
            
            return server.url ? (
              <LinkCard 
                key={server.id} 
                href={server.url} 
                className={`p-6 ${categoryStyle.hoverColor}`}
              >
                <ServerCard>content</ServerCard>
              </LinkCard>
            ) : (
              <FadeUpCard 
                key={server.id} 
                className={`p-6 ${categoryStyle.hoverColor}`}
              >
                <ServerCard>content</ServerCard>
              </FadeUpCard>
            );
          })}
        </div>

        {/* フッター情報 */}
        <FadeUpDiv className='mt-12 p-6 bg-muted/50 rounded-lg'>
          <div className='text-center space-y-2'>
            <h3 className='text-lg font-semibold'>サーバー運営について</h3>
            <p className='text-muted-foreground'>
              上記のサーバーで管理者・運営として活動しています。<br />
              各サーバーの詳細や参加方法については、リンクをクリックしてご確認ください。
            </p>
          </div>
        </FadeUpDiv>
      </FadeUpStagger>
    </main>
  );
}