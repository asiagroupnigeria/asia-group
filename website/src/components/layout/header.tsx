'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = React.useState(false);

  const routes = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('businesses'), path: '/businesses' },
    { name: t('sustainability'), path: '/sustainability' },
    { name: t('news'), path: '/news' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* PLACEHOLDER: Asia Group Logo - Green, White and Black */}
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl tracking-tighter">
            AG
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            ASIA GROUP
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    <Link href={route.path}>
                      {route.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/contact">{t('contact')}</Link>
          </Button>
          <Button asChild>
            <Link href="/contact#investors">{t('investors')}</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pl-1 pr-0">
              <div className="px-7 flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('contact')}
                </Link>
                <Link
                  href="/contact#investors"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {t('investors')}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
