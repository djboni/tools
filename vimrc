" ~/.vimrc

" Basic setup
set nocompatible
syntax enable
filetype plugin on

" Fuzzy file search
set path+=**
set wildmenu

" Tag jumping (install ctags)
command! Maketags !ctags -R .

" Autocomplete

" File browsing
let g:netrw_banner=0 " disable banner
let g:netrw_browse_split=4 " open in prior window
let g:netrw_altv=1         " open splits to the right
let g:netrw_liststyle=3    " tree view
let g:netrw_list_hide=netrw_gitignore#Hide()
let g:netrw_list_hide.=',\(^\|\s\s)\zs\.\S\+'

" Snippets
nnoremap ,mit :-1read $HOME/.vim/LICENSE.MIT<CR>21jdd$
nnoremap ,priv :-1read $HOME/.vim/LICENSE.PRIVATE<CR>11jdd$

" Build integration
set makeprg=make

" Line numbers
set number relativenumber

" Remap kj to ESC
inoremap kj <Esc>
inoremap KJ <Esc>

" Remap Ctrl+J to Uppercase word
"inoremap <c-j> <Esc>gUiw`]a
inoremap <c-j> <Esc>gUiwea
inoremap <c-k> <esc>guiwea

vnoremap ( di()<esc>P
vnoremap [ di[]<esc>P
vnoremap { di{}<esc>P
vnoremap ' di''<esc>P
vnoremap " di""<esc>P
vnoremap ` di``<esc>P

" Back to NORMAL mode when terminal window loses focus
"autocmd FocusLost * call feedkeys("\<esc>")
