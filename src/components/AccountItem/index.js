import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fdc776b66303a0e52c3aac22e70f967e~c5_100x100.jpeg?x-expires=1701010800&x-signature=DqlWjwPn4mEJ67uPaJKFr8oaHBo%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usernames')}>nguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
